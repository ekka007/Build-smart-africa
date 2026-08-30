import { SlideData } from "../types";

declare global {
  interface Window {
    google?: {
      accounts: {
        oauth2: {
          initTokenClient: (config: {
            client_id: string;
            scope: string;
            callback: (response: any) => void;
            error_callback?: (error: any) => void;
          }) => {
            requestAccessToken: (options?: { prompt?: string }) => void;
          };
        };
      };
    };
  }
}

const SLIDES_API_URL = "https://slides.googleapis.com/v1/presentations";

export interface CreateSlidesResult {
  presentationId: string;
  presentationUrl: string;
  slidesCount: number;
}

/**
 * Helper to request OAuth access token using Google Identity Services (GSI)
 */
export async function getGoogleAccessToken(clientId?: string): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!window.google || !window.google.accounts || !window.google.accounts.oauth2) {
      return reject(new Error("Google Identity Services script not loaded yet. Please refresh the page."));
    }

    // Default or configured Client ID
    const effectiveClientId =
      clientId ||
      ((import.meta as any).env?.VITE_GOOGLE_CLIENT_ID as string) ||
      "320383187793.apps.googleusercontent.com";

    try {
      const tokenClient = window.google.accounts.oauth2.initTokenClient({
        client_id: effectiveClientId,
        scope: "https://www.googleapis.com/auth/presentations https://www.googleapis.com/auth/drive.file",
        callback: (response: any) => {
          if (response.error) {
            reject(new Error(response.error_description || response.error));
          } else if (response.access_token) {
            resolve(response.access_token);
          } else {
            reject(new Error("No access token returned by Google"));
          }
        },
        error_callback: (error: any) => {
          reject(new Error(error?.message || "Google authentication failed"));
        },
      });

      tokenClient.requestAccessToken({ prompt: "consent" });
    } catch (err: any) {
      reject(err);
    }
  });
}

/**
 * Creates the complete 11-slide presentation in Google Slides via Google Slides REST API
 */
export async function exportToGoogleSlides(
  slides: SlideData[],
  accessToken: string,
  onProgress?: (progress: number, stepText: string) => void
): Promise<CreateSlidesResult> {
  onProgress?.(10, "Initializing presentation in Google Slides...");

  // 1. Create a new presentation
  const createRes = await fetch(SLIDES_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "BuildAI Africa - Pitch Deck (Google Africa Applied AI Lab)",
    }),
  });

  if (!createRes.ok) {
    const errorData = await createRes.json().catch(() => ({}));
    throw new Error(
      errorData.error?.message || `Failed to create presentation (HTTP ${createRes.status})`
    );
  }

  const presentation = await createRes.json();
  const presentationId = presentation.presentationId;
  const initialSlideId = presentation.slides?.[0]?.objectId;

  onProgress?.(30, `Structuring ${slides.length} pitch slides with custom layouts...`);

  const requests: any[] = [];

  // Delete the default initial blank/title slide if we are building custom slides
  // or we can reuse or create fresh ones
  const slideObjectIds: string[] = [];

  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    const slideId = `slide_custom_${i + 1}_${Date.now()}`;
    slideObjectIds.push(slideId);

    // Create custom slide
    requests.push({
      createSlide: {
        objectId: slideId,
        insertionIndex: i,
        slideLayoutReference: {
          predefinedLayout: "BLANK",
        },
      },
    });

    // Background shape fill for slide (Obsidian dark theme: #0F172A)
    const bgShapeId = `bg_shape_${i}`;
    requests.push({
      createShape: {
        objectId: bgShapeId,
        shapeType: "RECTANGLE",
        elementProperties: {
          pageObjectId: slideId,
          size: {
            width: { magnitude: 720, unit: "PT" },
            height: { magnitude: 405, unit: "PT" },
          },
          transform: {
            scaleX: 1,
            scaleY: 1,
            translateX: 0,
            translateY: 0,
            unit: "PT",
          },
        },
      },
    });

    requests.push({
      updateShapeProperties: {
        objectId: bgShapeId,
        fields: "shapeBackgroundFill.solidFill.color,outline",
        shapeProperties: {
          shapeBackgroundFill: {
            solidFill: {
              color: {
                rgbColor: { red: 0.05, green: 0.08, blue: 0.15 }, // Obsidian #0D1424
              },
            },
          },
          outline: {
            propertyState: "NOT_RENDERED",
          },
        },
      },
    });

    // Top Category / Tag badge
    const badgeId = `badge_${i}`;
    requests.push({
      createShape: {
        objectId: badgeId,
        shapeType: "ROUNDED_RECTANGLE",
        elementProperties: {
          pageObjectId: slideId,
          size: {
            width: { magnitude: 180, unit: "PT" },
            height: { magnitude: 22, unit: "PT" },
          },
          transform: {
            scaleX: 1,
            scaleY: 1,
            translateX: 40,
            translateY: 30,
            unit: "PT",
          },
        },
      },
    });

    requests.push({
      updateShapeProperties: {
        objectId: badgeId,
        fields: "shapeBackgroundFill.solidFill.color,outline",
        shapeProperties: {
          shapeBackgroundFill: {
            solidFill: {
              color: {
                rgbColor: { red: 0.96, green: 0.62, blue: 0.1 }, // Gold #F59E0B
              },
            },
          },
          outline: { propertyState: "NOT_RENDERED" },
        },
      },
    });

    requests.push({
      insertText: {
        objectId: badgeId,
        text: `SLIDE ${slide.slideNumber} • ${slide.category.toUpperCase()}`,
      },
    });

    requests.push({
      updateTextStyle: {
        objectId: badgeId,
        fields: "foregroundColor,fontSize,bold,fontFamily",
        textRange: { type: "ALL" },
        style: {
          foregroundColor: {
            opaqueColor: { rgbColor: { red: 0, green: 0, blue: 0 } },
          },
          fontSize: { magnitude: 9, unit: "PT" },
          bold: true,
          fontFamily: "Outfit",
        },
      },
    });

    // Headline Box
    const headlineId = `headline_${i}`;
    requests.push({
      createShape: {
        objectId: headlineId,
        shapeType: "TEXT_BOX",
        elementProperties: {
          pageObjectId: slideId,
          size: {
            width: { magnitude: 640, unit: "PT" },
            height: { magnitude: 55, unit: "PT" },
          },
          transform: {
            scaleX: 1,
            scaleY: 1,
            translateX: 40,
            translateY: 60,
            unit: "PT",
          },
        },
      },
    });

    requests.push({
      insertText: {
        objectId: headlineId,
        text: slide.headline,
      },
    });

    requests.push({
      updateTextStyle: {
        objectId: headlineId,
        fields: "foregroundColor,fontSize,bold,fontFamily",
        textRange: { type: "ALL" },
        style: {
          foregroundColor: {
            opaqueColor: { rgbColor: { red: 0.98, green: 0.98, blue: 1 } },
          },
          fontSize: { magnitude: 20, unit: "PT" },
          bold: true,
          fontFamily: "Outfit",
        },
      },
    });

    // Sub-headline / Description
    if (slide.subheadline) {
      const subId = `subheadline_${i}`;
      requests.push({
        createShape: {
          objectId: subId,
          shapeType: "TEXT_BOX",
          elementProperties: {
            pageObjectId: slideId,
            size: {
              width: { magnitude: 640, unit: "PT" },
              height: { magnitude: 30, unit: "PT" },
            },
            transform: {
              scaleX: 1,
              scaleY: 1,
              translateX: 40,
              translateY: 115,
              unit: "PT",
            },
          },
        },
      });

      requests.push({
        insertText: {
          objectId: subId,
          text: slide.subheadline,
        },
      });

      requests.push({
        updateTextStyle: {
          objectId: subId,
          fields: "foregroundColor,fontSize,fontFamily",
          textRange: { type: "ALL" },
          style: {
            foregroundColor: {
              opaqueColor: { rgbColor: { red: 0.7, green: 0.78, blue: 0.9 } },
            },
            fontSize: { magnitude: 12, unit: "PT" },
            fontFamily: "Plus Jakarta Sans",
          },
        },
      });
    }

    // Content Cards / Bullet Points
    if (slide.bullets && slide.bullets.length > 0) {
      const colWidth = Math.min(640 / slide.bullets.length - 15, 200);
      for (let b = 0; b < slide.bullets.length; b++) {
        const bullet = slide.bullets[b];
        const cardId = `card_${i}_${b}`;
        const posX = 40 + b * (colWidth + 15);

        requests.push({
          createShape: {
            objectId: cardId,
            shapeType: "ROUNDED_RECTANGLE",
            elementProperties: {
              pageObjectId: slideId,
              size: {
                width: { magnitude: colWidth, unit: "PT" },
                height: { magnitude: 180, unit: "PT" },
              },
              transform: {
                scaleX: 1,
                scaleY: 1,
                translateX: posX,
                translateY: 155,
                unit: "PT",
              },
            },
          },
        });

        requests.push({
          updateShapeProperties: {
            objectId: cardId,
            fields: "shapeBackgroundFill.solidFill.color,outline",
            shapeProperties: {
              shapeBackgroundFill: {
                solidFill: {
                  color: {
                    rgbColor: { red: 0.11, green: 0.17, blue: 0.28 }, // #1E293B
                  },
                },
              },
              outline: {
                outlineFill: {
                  solidFill: {
                    color: {
                      rgbColor: { red: 0.25, green: 0.35, blue: 0.5 },
                    },
                  },
                },
                weight: { magnitude: 1, unit: "PT" },
              },
            },
          },
        });

        const cardText = `${bullet.title}\n\n${bullet.description}${
          bullet.metric ? `\n\n[Key Metric: ${bullet.metric}]` : ""
        }`;

        requests.push({
          insertText: {
            objectId: cardId,
            text: cardText,
          },
        });

        requests.push({
          updateTextStyle: {
            objectId: cardId,
            fields: "foregroundColor,fontSize,fontFamily",
            textRange: { type: "ALL" },
            style: {
              foregroundColor: {
                opaqueColor: { rgbColor: { red: 0.9, green: 0.93, blue: 0.98 } },
              },
              fontSize: { magnitude: 10.5, unit: "PT" },
              fontFamily: "Plus Jakarta Sans",
            },
          },
        });
      }
    } else if (slide.layout === "title") {
      // Large Title Card
      const titleBoxId = `title_card_${i}`;
      requests.push({
        createShape: {
          objectId: titleBoxId,
          shapeType: "ROUNDED_RECTANGLE",
          elementProperties: {
            pageObjectId: slideId,
            size: {
              width: { magnitude: 640, unit: "PT" },
              height: { magnitude: 170, unit: "PT" },
            },
            transform: {
              scaleX: 1,
              scaleY: 1,
              translateX: 40,
              translateY: 160,
              unit: "PT",
            },
          },
        },
      });

      requests.push({
        updateShapeProperties: {
          objectId: titleBoxId,
          fields: "shapeBackgroundFill.solidFill.color,outline",
          shapeProperties: {
            shapeBackgroundFill: {
              solidFill: {
                color: { rgbColor: { red: 0.1, green: 0.15, blue: 0.25 } },
              },
            },
            outline: {
              outlineFill: {
                solidFill: {
                  color: { rgbColor: { red: 0.96, green: 0.62, blue: 0.1 } },
                },
              },
              weight: { magnitude: 1.5, unit: "PT" },
            },
          },
        },
      });

      requests.push({
        insertText: {
          objectId: titleBoxId,
          text: `Tagline: Intelligence for Africa’s Next Generation of Development.\n\nKey Focus: Ingesting raw land reality and delivering instant 3D site plans, dynamic bill of quantities, and Bankability Risk Scores for African real estate & infrastructure finance.\n\nPresented by: Saroj Ekka & Team • Google Africa Applied AI Lab`,
        },
      });

      requests.push({
        updateTextStyle: {
          objectId: titleBoxId,
          fields: "foregroundColor,fontSize,fontFamily",
          textRange: { type: "ALL" },
          style: {
            foregroundColor: {
              opaqueColor: { rgbColor: { red: 0.95, green: 0.95, blue: 0.98 } },
            },
            fontSize: { magnitude: 12, unit: "PT" },
            fontFamily: "Plus Jakarta Sans",
          },
        },
      });
    }

    // Footer on each slide
    const footerId = `footer_${i}`;
    requests.push({
      createShape: {
        objectId: footerId,
        shapeType: "TEXT_BOX",
        elementProperties: {
          pageObjectId: slideId,
          size: {
            width: { magnitude: 640, unit: "PT" },
            height: { magnitude: 20, unit: "PT" },
          },
          transform: {
            scaleX: 1,
            scaleY: 1,
            translateX: 40,
            translateY: 375,
            unit: "PT",
          },
        },
      },
    });

    requests.push({
      insertText: {
        objectId: footerId,
        text: `BuildAI Africa • Demo Day Pitch Deck • Google DeepMind Ecosystem • buildai.africa`,
      },
    });

    requests.push({
      updateTextStyle: {
        objectId: footerId,
        fields: "foregroundColor,fontSize,fontFamily",
        textRange: { type: "ALL" },
        style: {
          foregroundColor: {
            opaqueColor: { rgbColor: { red: 0.5, green: 0.6, blue: 0.7 } },
          },
          fontSize: { magnitude: 8, unit: "PT" },
          fontFamily: "Plus Jakarta Sans",
        },
      },
    });
  }

  // Delete the initial blank slide that Google Slides generates by default
  if (initialSlideId) {
    requests.push({
      deleteObject: {
        objectId: initialSlideId,
      },
    });
  }

  onProgress?.(65, "Executing batch formatting and text styling...");

  // Send batch update to Google Slides
  const batchRes = await fetch(`${SLIDES_API_URL}/${presentationId}:batchUpdate`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ requests }),
  });

  if (!batchRes.ok) {
    const errorData = await batchRes.json().catch(() => ({}));
    throw new Error(
      errorData.error?.message || `Failed to populate Google Slides (HTTP ${batchRes.status})`
    );
  }

  onProgress?.(100, "Presentation generated successfully!");

  return {
    presentationId,
    presentationUrl: `https://docs.google.com/presentation/d/${presentationId}/edit`,
    slidesCount: slides.length,
  };
}

/**
 * Downloads presentation data as a structured JSON file backup
 */
export function downloadDeckJSON(slides: SlideData[]): void {
  const dataStr =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(
      JSON.stringify(
        {
          project: "BuildAI Africa Pitch Deck",
          exportedAt: new Date().toISOString(),
          totalSlides: slides.length,
          slides,
        },
        null,
        2
      )
    );
  const downloadAnchor = document.createElement("a");
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", "BuildAI_Africa_Pitch_Deck.json");
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}
