"use client"

import { useEffect, useRef } from "react"

declare global {
  interface Window {
    mapboxgl: any
    gsap: any
  }
}

export default function FiumoveMap() {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<any>(null)

  useEffect(() => {
    // Inject CSS directly into head to ensure it loads in production
    const mapboxCSS = document.createElement("link")
    mapboxCSS.href = "https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css"
    mapboxCSS.rel = "stylesheet"
    mapboxCSS.crossOrigin = "anonymous"
    document.head.appendChild(mapboxCSS)

    // Inject custom styles directly
    const customStyles = document.createElement("style")
    customStyles.textContent = `
      /* Force styles for production */
      .mapboxgl-popup {
        z-index: 100 !important;
      }
      
      .mapboxgl-popup-content {
        padding: 0 !important;
        border-radius: 20px !important;
        background: transparent !important;
        max-width: none !important;
        box-shadow: none !important;
      }
      
      .mapboxgl-popup-tip {
        display: none !important;
      }
      
      .mapboxgl-popup-close-button {
        display: none !important;
      }
      
      .fiumove-popup-modern {
        background: white !important;
        border-radius: 20px !important;
        box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15) !important;
        overflow: hidden !important;
        max-width: 350px !important;
        min-width: 320px !important;
        border: 1px solid rgba(0, 0, 0, 0.05) !important;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
        position: relative !important;
        pointer-events: auto !important;
      }
      
      .fiumove-popup-image-container {
        position: relative !important;
        height: 180px !important;
        overflow: hidden !important;
        background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%) !important;
      }
      
      .fiumove-popup-image {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover !important;
        transition: transform 0.3s ease !important;
      }
      
      .fiumove-popup-close-btn {
        position: absolute !important;
        top: 12px !important;
        right: 12px !important;
        background: rgba(0, 0, 0, 0.5) !important;
        border: none !important;
        border-radius: 50% !important;
        width: 32px !important;
        height: 32px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        cursor: pointer !important;
        transition: all 0.2s ease !important;
        color: white !important;
        z-index: 10 !important;
        backdrop-filter: blur(10px) !important;
      }
      
      .fiumove-popup-close-btn:hover {
        background: rgba(0, 0, 0, 0.7) !important;
        transform: scale(1.1) !important;
      }
      
      .fiumove-popup-content-wrapper {
        padding: 20px !important;
      }
      
      .fiumove-popup-title {
        font-size: 18px !important;
        font-weight: 700 !important;
        margin: 0 0 12px 0 !important;
        color: #1e293b !important;
        line-height: 1.3 !important;
      }
      
      .fiumove-popup-description {
        font-size: 14px !important;
        line-height: 1.6 !important;
        color: #64748b !important;
        margin-bottom: 20px !important;
        font-weight: 400 !important;
      }
      
      .fiumove-popup-actions {
        display: flex !important;
        gap: 10px !important;
      }
      
      .fiumove-popup-btn {
        flex: 1 !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        gap: 6px !important;
        padding: 12px 16px !important;
        border-radius: 12px !important;
        text-decoration: none !important;
        font-size: 13px !important;
        font-weight: 600 !important;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        border: none !important;
        cursor: pointer !important;
        position: relative !important;
        overflow: hidden !important;
        text-align: center !important;
      }
      
      .fiumove-popup-btn.primary {
        background: linear-gradient(135deg, #4f6fa8 0%, #3d5a8c 100%) !important;
        color: white !important;
        box-shadow: 0 4px 15px rgba(79, 111, 168, 0.3) !important;
      }
      
      .fiumove-popup-btn.primary:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 8px 25px rgba(79, 111, 168, 0.4) !important;
      }
      
      .fiumove-popup-btn.secondary {
        background: #f8fafc !important;
        color: #475569 !important;
        border: 2px solid #e2e8f0 !important;
      }
      
      .fiumove-popup-btn.secondary:hover {
        background: #e2e8f0 !important;
        border-color: #cbd5e1 !important;
        transform: translateY(-2px) !important;
      }
      
      .fiumove-popup-btn svg {
        width: 16px !important;
        height: 16px !important;
      }
      
      .fiumove-marker {
        width: 70px !important;
        height: 70px !important;
        border-radius: 50% !important;
        background: white !important;
        border: 4px solid #ffffff !important;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2) !important;
        cursor: pointer !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        position: relative !important;
        z-index: 2 !important;
        opacity: 1 !important;
        visibility: visible !important;
      }
      
      .fiumove-marker.hidden {
        opacity: 0 !important;
        visibility: hidden !important;
        pointer-events: none !important;
        transform: scale(0.8) !important;
      }
      
      .fiumove-marker::before {
        content: '' !important;
        position: absolute !important;
        top: 50% !important;
        left: 50% !important;
        transform: translate(-50%, -50%) !important;
        width: 90px !important;
        height: 90px !important;
        border-radius: 50% !important;
        background: radial-gradient(circle, rgba(125, 211, 252, 0.3) 0%, rgba(125, 211, 252, 0.1) 70%, transparent) !important;
        animation: fiumove-pulse 2.5s infinite !important;
        z-index: -1 !important;
      }
      
      .fiumove-marker:hover {
        transform: scale(1.15) !important;
        box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3) !important;
      }
      
      .fiumove-marker.clicked {
        transform: scale(1.2) !important;
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4) !important;
        z-index: 10 !important;
      }
      
      .fiumove-marker img {
        width: 50px !important;
        height: 50px !important;
        border-radius: 50% !important;
        object-fit: cover !important;
        border: 2px solid rgba(255, 255, 255, 0.9) !important;
        z-index: 3 !important;
        position: relative !important;
      }
      
      @keyframes fiumove-pulse {
        0% {
          transform: translate(-50%, -50%) scale(0.8) !important;
          opacity: 1 !important;
        }
        100% {
          transform: translate(-50%, -50%) scale(1.8) !important;
          opacity: 0 !important;
        }
      }
      
      @media (max-width: 768px) {
        .fiumove-popup-modern {
          max-width: 300px !important;
          min-width: 280px !important;
        }
        
        .fiumove-popup-actions {
          flex-direction: column !important;
          gap: 8px !important;
        }
        
        .fiumove-marker {
          width: 65px !important;
          height: 65px !important;
        }
        
        .fiumove-marker img {
          width: 45px !important;
          height: 45px !important;
        }
        
        .fiumove-popup-image-container {
          height: 160px !important;
        }
      }
    `
    document.head.appendChild(customStyles)

    // Load Mapbox JS
    const mapboxScript = document.createElement("script")
    mapboxScript.src = "https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js"
    mapboxScript.crossOrigin = "anonymous"
    mapboxScript.onload = () => {
      // Load GSAP
      const gsapScript = document.createElement("script")
      gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
      gsapScript.crossOrigin = "anonymous"
      gsapScript.onload = initializeMap
      document.head.appendChild(gsapScript)
    }
    document.head.appendChild(mapboxScript)

    function initializeMap() {
      if (!window.mapboxgl || !mapContainerRef.current) return

      // Solo FIUMOVE
      const fiumoveCenter = {
        name: "Fiumove",
        description: "Divisione specialistica dedicata ai servizi di riabilitazione e fisioterapia.",
        coordinates: [12.738853709311144, 45.92741334954858],
        logo: "/images/fiumove-logo.png",
        image:
          "https://cdn.prod.website-files.com/680f6cd51bd138ae0ceefc13/68763d4d9fbedb0f3a31b6c9_Screenshot%202025-07-15%20at%2013.35.59.png",
      }

      let map: any
      let marker: any
      let openPopup: any = null
      let activeMarker: any = null
      let hoverPopup: any = null
      let hoverTimeout: any = null

      const isMobile = () => window.innerWidth <= 767 || "ontouchstart" in window

      window.mapboxgl.accessToken =
        "pk.eyJ1IjoiZWRpc2JhbGkwMyIsImEiOiJjbTFvcnFvbjcxNTNnMmtxdnA0cjJkZGx0In0.gk1glAL0jkmWK1_Tyf4Fow"

      map = new window.mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/satellite-streets-v12",
        center: fiumoveCenter.coordinates,
        zoom: isMobile() ? 16 : 17,
        attributionControl: false,
        logoPosition: "bottom-right",
        interactive: true,
        trackResize: true,
        preserveDrawingBuffer: true,
      })

      map.addControl(new window.mapboxgl.NavigationControl(), "top-right")

      map.on("load", () => {
        // Hide loading overlay
        const loadingOverlay = document.getElementById("fiumove-loading")
        if (loadingOverlay) {
          if (window.gsap) {
            window.gsap.to(loadingOverlay, {
              opacity: 0,
              duration: 0.6,
              onComplete: () => (loadingOverlay.style.display = "none"),
            })
          } else {
            loadingOverlay.style.opacity = "0"
            setTimeout(() => (loadingOverlay.style.display = "none"), 300)
          }
        }

        createMarker()
        setupMapEvents()
      })

      function createMarker() {
        const markerElement = document.createElement("div")
        markerElement.className = "fiumove-marker"
        markerElement.innerHTML = `
          <img src="${fiumoveCenter.logo}" alt="${fiumoveCenter.name}" onerror="this.style.display='none';">
        `

        marker = new window.mapboxgl.Marker({
          element: markerElement,
          anchor: "center",
        })
          .setLngLat(fiumoveCenter.coordinates)
          .addTo(map)

        setupMarkerEvents(markerElement)

        if (window.gsap) {
          window.gsap.from(markerElement, {
            scale: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
          })
        }
      }

      function hideMarker() {
        const markerElement = marker.getElement()
        if (markerElement && window.gsap) {
          window.gsap.to(markerElement, {
            opacity: 0,
            scale: 0.8,
            duration: 0.3,
            ease: "power2.out",
            onComplete: () => {
              markerElement.classList.add("hidden")
            },
          })
        } else if (markerElement) {
          markerElement.classList.add("hidden")
        }
      }

      function showMarker() {
        const markerElement = marker.getElement()
        if (markerElement && window.gsap) {
          markerElement.classList.remove("hidden")
          window.gsap.to(markerElement, {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: "back.out(1.2)",
          })
        } else if (markerElement) {
          markerElement.classList.remove("hidden")
        }
      }

      function setupMarkerEvents(markerElement: HTMLElement) {
        if (!isMobile()) {
          markerElement.addEventListener("mouseenter", () => {
            if (hoverTimeout) {
              clearTimeout(hoverTimeout)
              hoverTimeout = null
            }
            hoverTimeout = setTimeout(() => {
              showPopup(true)
            }, 100)
          })

          markerElement.addEventListener("mouseleave", () => {
            if (hoverTimeout) {
              clearTimeout(hoverTimeout)
              hoverTimeout = null
            }
            hoverTimeout = setTimeout(() => {
              if (hoverPopup) {
                const popupElement = hoverPopup.getElement()
                const isMouseOverPopup = popupElement && popupElement.matches(":hover")
                if (!isMouseOverPopup) {
                  hideHoverPopup()
                }
              }
            }, 100)
          })
        }

        markerElement.addEventListener("click", (e) => {
          e.preventDefault()
          e.stopPropagation()
          showPopup(false)
        })
      }

      function showPopup(isHover = false) {
        if (isHover && openPopup) return

        if (isHover) {
          if (hoverPopup) {
            hoverPopup.remove()
            hoverPopup = null
          }
        } else {
          if (openPopup) {
            openPopup.remove()
            openPopup = null
          }
          if (activeMarker) {
            activeMarker.classList.remove("clicked")
            activeMarker = null
          }
          if (hoverPopup) {
            hoverPopup.remove()
            hoverPopup = null
          }
        }

        // NASCONDI IL MARKER quando appare il popup
        hideMarker()

        const popupContent = document.createElement("div")
        popupContent.className = "fiumove-popup-modern"

        // Create popup content with inline styles as fallback
        popupContent.innerHTML = `
          <div class="fiumove-popup-image-container" style="position: relative; height: 180px; overflow: hidden; background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);">
            <img src="${fiumoveCenter.image}" alt="${fiumoveCenter.name}" class="fiumove-popup-image" style="width: 100%; height: 100%; object-fit: cover;">
            <button class="fiumove-popup-close-btn" aria-label="Chiudi" style="position: absolute; top: 12px; right: 12px; background: rgba(0, 0, 0, 0.5); border: none; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; cursor: pointer; color: white; z-index: 10;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div class="fiumove-popup-content-wrapper" style="padding: 20px;">
            <h3 class="fiumove-popup-title" style="font-size: 18px; font-weight: 700; margin: 0 0 12px 0; color: #1e293b; line-height: 1.3;">${fiumoveCenter.name}</h3>
            <p class="fiumove-popup-description" style="font-size: 14px; line-height: 1.6; color: #64748b; margin-bottom: 20px; font-weight: 400;">${fiumoveCenter.description}</p>
            <div class="fiumove-popup-actions" style="display: flex; gap: 10px;">
              <a href="https://www.google.com/maps/dir/?api=1&destination=${fiumoveCenter.coordinates[1]},${fiumoveCenter.coordinates[0]}" class="fiumove-popup-btn primary" target="_blank" rel="noopener noreferrer" style="flex: 1; display: flex; align-items: center; justify-content: center; gap: 6px; padding: 12px 16px; border-radius: 12px; text-decoration: none; font-size: 13px; font-weight: 600; background: linear-gradient(135deg, #4f6fa8 0%, #3d5a8c 100%); color: white; box-shadow: 0 4px 15px rgba(79, 111, 168, 0.3);">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style="width: 16px; height: 16px;">
                  <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                </svg>
                Navigazione
              </a>
              <a href="https://maps.apple.com/?daddr=${fiumoveCenter.coordinates[1]},${fiumoveCenter.coordinates[0]}" class="fiumove-popup-btn secondary" target="_blank" rel="noopener noreferrer" style="flex: 1; display: flex; align-items: center; justify-content: center; gap: 6px; padding: 12px 16px; border-radius: 12px; text-decoration: none; font-size: 13px; font-weight: 600; background: #f8fafc; color: #475569; border: 2px solid #e2e8f0;">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style="width: 16px; height: 16px;">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Apple Maps
              </a>
            </div>
          </div>
        `

        const newPopup = new window.mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false,
          offset: [0, 0],
          anchor: "center",
          className: isHover ? "fiumove-modern-popup hover-popup" : "fiumove-modern-popup",
          maxWidth: "none",
        })

        newPopup.setDOMContent(popupContent)
        newPopup.setLngLat(fiumoveCenter.coordinates).addTo(map)

        if (isHover) {
          hoverPopup = newPopup
        } else {
          openPopup = newPopup
          const markerElement = marker.getElement()
          if (markerElement) {
            markerElement.classList.add("clicked")
            activeMarker = markerElement
          }
        }

        if (window.gsap) {
          const popupElement = isHover ? hoverPopup.getElement() : openPopup.getElement()
          if (isHover) {
            window.gsap.fromTo(
              popupElement,
              { opacity: 0, scale: 0.9 },
              { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" },
            )
          } else {
            window.gsap.fromTo(
              popupElement,
              { opacity: 0, scale: 0.8 },
              { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.2)" },
            )
          }
        }

        setTimeout(() => {
          const popupElement = isHover
            ? hoverPopup
              ? hoverPopup.getElement()
              : null
            : openPopup
              ? openPopup.getElement()
              : null

          if (popupElement) {
            const closeBtn = popupElement.querySelector(".fiumove-popup-close-btn")
            if (closeBtn) {
              closeBtn.addEventListener("click", (e: Event) => {
                e.stopPropagation()
                if (isHover && hoverPopup) {
                  hideHoverPopup()
                } else if (!isHover && openPopup) {
                  closeClickPopup()
                }
              })
            }

            if (isHover && hoverPopup) {
              popupElement.addEventListener("mouseenter", () => {
                if (hoverTimeout) {
                  clearTimeout(hoverTimeout)
                  hoverTimeout = null
                }
              })

              popupElement.addEventListener("mouseleave", () => {
                hoverTimeout = setTimeout(() => {
                  hideHoverPopup()
                }, 100)
              })
            }
          }
        }, 50)
      }

      function hideHoverPopup() {
        if (hoverPopup) {
          if (window.gsap) {
            const popupElement = hoverPopup.getElement()
            window.gsap.to(popupElement, {
              opacity: 0,
              scale: 0.9,
              duration: 0.2,
              onComplete: () => {
                hoverPopup.remove()
                hoverPopup = null
                // RIMOSTRA IL MARKER quando il popup scompare
                showMarker()
              },
            })
          } else {
            hoverPopup.remove()
            hoverPopup = null
            // RIMOSTRA IL MARKER quando il popup scompare
            showMarker()
          }
        }
      }

      function closeClickPopup() {
        if (openPopup) {
          if (window.gsap) {
            const popupElement = openPopup.getElement()
            window.gsap.to(popupElement, {
              opacity: 0,
              scale: 0.8,
              duration: 0.3,
              onComplete: () => {
                openPopup.remove()
                openPopup = null
                // RIMOSTRA IL MARKER quando il popup scompare
                showMarker()
              },
            })
          } else {
            openPopup.remove()
            openPopup = null
            // RIMOSTRA IL MARKER quando il popup scompare
            showMarker()
          }

          if (activeMarker) {
            activeMarker.classList.remove("clicked")
            activeMarker = null
          }
        }
      }

      function setupMapEvents() {
        map.on("click", (e: any) => {
          const target = e.originalEvent.target
          if (
            target.closest(".mapboxgl-popup") ||
            target.closest(".fiumove-marker") ||
            target.closest(".fiumove-popup-btn") ||
            target.closest(".fiumove-popup-close-btn")
          ) {
            return
          }
          closeClickPopup()
          hideHoverPopup()
        })

        map.on("resize", () => {
          map.getCanvas().focus()
        })
      }

      mapRef.current = map
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
      }
    }
  }, [])

  return (
    <div className="w-full h-full relative">
      <div
        id="fiumove-loading"
        className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 flex items-center justify-center z-50"
      >
        <div className="w-10 h-10 border-3 border-gray-200 border-t-[#7dd3fc] rounded-full animate-spin"></div>
      </div>

      <div ref={mapContainerRef} className="w-full h-full" />
    </div>
  )
}
