"use client"

import "maplibre-gl/dist/maplibre-gl.css"
import MapContainer, { Layer, Source, type FillLayer } from "react-map-gl/maplibre"

export default function MapComponent() {
	const foodData = {
		type: "FeatureCollection",
		features: [
			{
				type: "Feature",
				properties: {},
				geometry: {
					coordinates: [
						[
							[20.11341693863224, 48.683169445061196],
							[20.113351133765747, 48.68354252567238],
							[20.113334434187323, 48.683542600508105],
							[20.113402399798076, 48.683168517879324],
							[20.11341693863224, 48.683169445061196]
						]
					],
					type: "Polygon"
				}
			},
			{
				type: "Feature",
				properties: {},
				geometry: {
					coordinates: [
						[
							[20.11330068026635, 48.683556975127146],
							[20.113287890735165, 48.683563758213666],
							[20.1133602023574, 48.68310883607893],
							[20.113379762400086, 48.68311084335514],
							[20.11330068026635, 48.683556975127146]
						]
					],
					type: "Polygon"
				}
			},
			{
				type: "Feature",
				properties: {},
				geometry: {
					coordinates: [
						[
							[20.11342875162555, 48.68304227909073],
							[20.1134177212073, 48.68302523826557],
							[20.11357585712065, 48.682974912697745],
							[20.11358939814272, 48.6829924935881],
							[20.11342875162555, 48.68304227909073]
						]
					],
					type: "Polygon"
				}
			},
			{
				type: "Feature",
				properties: {},
				geometry: {
					coordinates: [
						[
							[20.113400949746364, 48.68306710186931],
							[20.11343954994564, 48.68305303617183],
							[20.113783820966376, 48.68341788495326],
							[20.113749660509512, 48.6834252048634],
							[20.113400949746364, 48.68306710186931]
						]
					],
					type: "Polygon"
				}
			}
		]
	}
	const foodLayer: FillLayer = {
		id: "food",
		type: "fill",
		source: "food",
		paint: {
			"fill-color": "#ef4444",
			"fill-outline-color": "#ef4444"
		}
	}

	return (
		<div className="size-full">
			<MapContainer
				initialViewState={{
					latitude: 48.682856,
					longitude: 20.113279,
					zoom: 17
				}}
				minZoom={17}
				maxZoom={18}
				attributionControl={false}
				style={{ width: "100%", height: "100%" }}
				mapStyle="https://api.maptiler.com/maps/streets-v2/style.json?key=MXHW1WQksbFLUTsILGLR"
				interactiveLayerIds={["data"]}
			>
				<Source key="food" type="geojson" data={foodData}>
					<Layer {...foodLayer} />
				</Source>
			</MapContainer>
		</div>
	)
}
