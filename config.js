var config = {
//Header + Title
   
    style: 'mapbox://styles/acled/ckhoz7u1d0her1aqz80pcn6ff',
    accessToken: 'pk.eyJ1IjoiYWNsZWQiLCJhIjoiY2pncW50MTVwMDUzNzJycWx4YXVnamh1biJ9.azwIz4TmaBWj7MFNZX8R9g',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: '10 Conflicts You Definitely Need to Worry About in 2021',
    subtitle: 'As political violence continues to erupt worldwide, ACLED reports on 10 conflicts worth watching throughout the coming year.',
    byline: 'Produced by ACLED Research Analysts Josh Satre, Curtis Goos and Adam Miller',
    footer: 'Source:  © ACLED 2021 Data can be found here: *insert data source citations, etc.',

 // Sections begin

    chapters: [
    
 //world-intro
        {
            id: 'world-intro',
            alignment: 'left',
            hidden: false,
            title: 'Intro',
            description: 'In case you missed it, 2020 was a wild year...',
            location: {
                center: [14.22310, 21.33435],
                zoom: 1.46,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'acled-2020-allevents',
                    opacity: 0.5
                },
            ],
            onChapterExit: [
                {
                    layer: 'acled-2020-allevents',
                    opacity: 0
                },            
            ],
        },
//world-data2polygons
        {
            id: 'world-data2polygons',
            alignment: 'left',
            hidden: false,
            title: '',
            description: '',
            location: {
                center: [14.22310, 21.33435],
                zoom: 1.46,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'acled-2020-allevents',
                    opacity: 0.5
                },
                {
                    layer: '10-conflicts-polygons',
                    opacity: 0
                }
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                {
                    layer: 'acled-2020-allevents',
                    opacity: 0
                },
                {
                    layer: '10-conflicts-polygons',
                    opacity: 1
                }
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'world-text',
            alignment: 'left',
            hidden: false,
            title: 'World Text',
            description: 'In this report, ACLED has chosen 10 conflicts that demonstrate how violent political disorder is evolving in places it has festered for decades — such as India and Pakistan — as well as in relatively new spaces — such as .... Across these 10 cases, observers have often concentrated on active threats and acts of violence, and less so on the latent risks that may produce new agents, modalities, targets, and opportunities for violence. If the past decade offers any lessons, it is that conflict can take many forms, and can arise from a range of local vulnerabilities if stoked. Here, we review 10 situations in which conflict is likely to change and worsen in the coming year, creating new dilemmas for governments and citizens.',
            location: {
                center: [14.22310, 21.33435],
                zoom: 1.46,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '10-conflicts-polygons',
                    opacity: 1
                },
               
            ],
            onChapterExit: [
              
                {
                    layer: '10-conflicts-polygons',
                    opacity: 0
                }
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'world2africa',
            alignment: 'right',
            hidden: false,
            title: 'Africa',
            description: 'Africa Overview',
            location: {
                center: [53.88551, 1.44802],
                zoom: 2.54,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                 layer: 'africa-poly',
                 opacity: 1
                 }],
            onChapterExit: [
                
                 {
                     layer: 'africa-poly',
                     opacity: 0
             },
            ]
        },
// africa2-sahel
        {
            id: 'africa-sahel',
            alignment: 'right',
            hidden: false,
            title: 'Africa to Sahel',
            description: 'Africa to Sahel',
            location: {
                center: [-4.29098, 15.79492],
                zoom:4.09,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
// sahel
        {
            id: 'sahel',
            alignment: 'right',
            hidden: false,
            title: 'Sahel',
            description: 'Sahel',
            location: {
                center: [-4.29098, 15.79492],
                zoom:4.09,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
// sahel-moz
        {
            id: 'sahel-mozambique',
            alignment: 'right',
            hidden: false,
            title: 'Mozambique',
            description: 'Mozambique placeholder',
            location: {
                center: [36.50129, -17.69012 ],
                zoom: 4.84,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
//mozambique
        {
            id: 'mozambique',
            alignment: 'right',
            hidden: false,
            title: 'Mozambique',
            description: 'Mozambique placeholder',
            location: {
                center: [36.50129, -17.69012 ],
                zoom: 4.84,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [  {
                layer: 'mozambique-a',
                opacity: 1},],
            onChapterExit: [  {
                layer: 'mozambique-a',
                opacity: 0},]
        },
//cabo delgado
        {
            id: 'cabo-delgado',
            alignment: 'right',
            hidden: false,
            title: 'Cabo Delgado',
            description: 'Cabo Delgado',
            location: {
                center: [39.456320, -12.305060],
                zoom: 4.84,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [  {
                layer: 'mozambique-a',
                opacity: 1},
            ],
            onChapterExit: [
                {
                    layer: 'mozambique-a',
                    opacity: 0},
            ]
        },
//mozambique-ethiopia
        {
            id: 'mozambique-ethiopia',
            alignment: 'right',
            hidden: true,
            title: '',
            description: '',
            location: {
                center: [40.49373, 9.16690],
                zoom: 5.79,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

//ethiopia-1
        {
            id: 'ethiopia-1',
            alignment: 'right',
            hidden: false,
            title: 'Ethiopia',
            image: 'data:image/jpeg;base64,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',
            description: 'Ethiopia’s conflict between the federal government and the former administration of the northern Tigray region, the Tigray People’s Liberation Front (TPLF), began in early November. While the regional conflict has subsided after four weeks of intense fighting, widespread displacement of millions throughout the Amhara and Tigray region (highlighted in peach) and simmering inter-ethnic conflicts continue to present serious security and humanitarian challenges for the Abiy administration.',
            location: {
                center: [40.49373, 9.16690],
                zoom: 5.79,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'ethiopia-a',
                opacity: 1
            },
            ],
            onChapterExit: [{
                layer: 'ethiopia-a',
                opacity: 0
            },
            {
                layer: 'ethiopia-b',
                opacity: 1
            }]
        },
//ethiopia-2
        {
            id: 'ethiopia-2',
            alignment: 'right',
            hidden: false,
            title: 'Ethiopia 2',
            image: 'data:image/jpeg;base64,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',
            description: 'Ethiopia’s conflict between the federal government and the former administration of the northern Tigray region, the Tigray People’s Liberation Front (TPLF), began in early November. While the regional conflict has subsided after four weeks of intense fighting, widespread displacement of millions throughout the Amhara and Tigray region (highlighted in peach) and simmering inter-ethnic conflicts continue to present serious security and humanitarian challenges for the Abiy administration.',
            location: {
                center: [40.49373, 9.16690],
                zoom: 5.79,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'ethiopia-b',
                opacity: 1
            },
            ],
            onChapterExit: [{
                layer: 'ethiopia-b',
                opacity: 0
            },
           ]
        },
//middle east overview
        {
            id: 'middle-east-overview',
            alignment: 'right',
            hidden: false,
            title: 'Middle East Overview',
            description: 'ME Overview Here',
            location: {
                center: [31.02814, 27.84799],
                zoom: 3.66,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ {
                     layer: 'me-poly',
                     opacity: 1
                 }],
            onChapterExit: [{
                layer: 'me-poly',
                opacity: 0
            }]
        },
//me-yemen
        {
            id: 'me-yemen',
            alignment: 'right',
            hidden: false,
            title: '',
            description: '',
            location: {
                center: [45.49023, 15.77554],
                zoom: 6.02,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
//yemen
        {
            id: 'yemen',
            alignment: 'right',
            hidden: false,
            title: 'Yemen',
            description: 'Yemen Country text here',
            location: {
                center: [45.49023, 15.77554],
                zoom: 6.02,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter:[
                {
                    layer: 'yemen-a',
                    opacity: 1
                }
            ],
            onChapterExit: [{
                layer: 'yemen-a',
                opacity: 0
            }]
        },
//yemen-cca
        {
            id: 'yemen-cca',
            alignment: 'right',
            hidden: false,
            title: '',
            description: '',
            location: {
                center: [62.10277, 41.70217],
                zoom: 3.2,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
//cca-overview
        {
            id: 'cca-overview',
            alignment: 'right',
            hidden: false,
            title: 'CCA Overview',
            description: 'CCA Overview',
            location: {
                center: [62.10277, 41.70217],
                zoom: 3.2,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
//cca-aa
        {
            id: 'cca-aa',
            alignment: 'right',
            hidden: false,
            title: 'CCA-AA placeholder',
            description: 'CCA-AA placeholder',
            location: {
                center: [47.31103, 40.17752],
                zoom: 6.5,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
//armenia-azerbaijan
        {
            id: 'armenia-azerbaijan',
            alignment: 'right',
            hidden: false,
            title: 'AA placeholder text',
            description: 'AA placeholder text',
            location: {
                center: [47.31103, 40.17752],
                zoom: 6.5,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'armenia-azerbaijan-a',
                    opacity: 1},
            ],
            onChapterExit: [  {
                layer: 'armenia-azerbaijan-a',
                opacity: 0},
            ]
        },
//aa-sasia
        {
            id: 'aa-s-asia',
            alignment: 'right',
            hidden: true,
            title: '',
            description: '',
            location: {
                center: [73.71242, 24.22636],
                zoom: 5.66,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
//s asia overview
        {
            id: 's-asia-overview',
            alignment: 'right',
            hidden: false,
            title: 'S Asia Overview',
            description: 'S Asia Overview',
            location: {
                center: [73.71242, 24.22636],
                zoom: 4.5,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
//india-pakistan
        {
            id: 'india-pakistan',
            alignment: 'right',
            hidden: false,
            title: 'India/Pakistan',
            description: 'India/Pakistan text here',
            location: {
                center: [73.71242, 24.22636],
                zoom: 4.15,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'india-pakistan-a',
                    opacity: 1},
            ],
            onChapterExit: [
                {
                    layer: 'india-pakistan-a',
                    opacity: 0},
            ]
        },
//india-jk//

		{
            id: 'india-jk',
            alignment: 'right',
            hidden: false,
            title: 'Jammu/Kashmir',
			//title: '<span style="background-color:black; line-height:50px;">INDIA JK HEADLINE PLACEHOLDER</span>',
			description: 'Jammu/Kashmir text here',
			//description: '<span style="color:black;background-color:white"> INDIA JK TEXT PLACEHOLDER </span>',
			location: {
				center: [74.43137, 33.88668],
				zoom: 5.93,
				pitch: 0.00,
				bearing: 0.00
			},
			//callback: 'showLegend',
            onChapterEnter: [],
            onChapterExit: []
        },
//indiapakistan-seasia
        {
            id: 'india-pakistan-se-asia',
            alignment: 'right',
            hidden: false,
            title: '',
            description: '',
            location: {
                center: [96.65675, 19.25948],
                zoom: 4,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

//se asia
        {
            id: 'se-asia-overview',
            alignment: 'right',
            hidden: false,
            title: 'SE Asia Overview',
            description: 'SE Asia Overview',
            location: {
                center: [96.65675, 19.25948],
                zoom: 4,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
//myanmar
        {
            id: 'myanmar',
            alignment: 'right',
            hidden: false,
            title: 'Myanmar',
            description: 'Myanmar Country Text',
            location: {
                center: [96.65675, 19.25948],
                zoom: 5,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
// myanmar-sa
        {
            id: 'myanmar-sa',
            alignment: 'right',
            hidden: false,
            title: '',
            description: '',
            location: {
                center: [-63.51170, -21.41744],
                zoom: 2.8,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

//SA overview
        {
            id: 'sa-overview',
            alignment: 'right',
            hidden: false,
            title: 'South America Overview',
            description: 'South America Overview',
            location: {
                center: [-63.51170, -21.41744],
                zoom: 2.8,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
//colombia events
        {
            id: 'colombia-1',
            alignment: 'right',
            hidden: false,
            title: 'Colombia Events',
            description: 'Colombia had many events in 2020....',
            location: {
                center: [-72.89518, 3.64478],
                zoom: 5.2,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'colombia-events',
                     opacity: 1
                 }
            ],
            onChapterExit: [
                {
                    layer: 'colombia-events',
                    opacity: 0
                }
            ]
        },
//colombia fatalities
        {
            id: 'colombia-2',
            alignment: 'right',
            hidden: false,
            title: 'Colombia Fatalities',
            description: 'Colombia had many fatalities from VAC in 2020....',
            location: {
                center: [-72.89518, 3.64478],
                zoom: 5.2,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'colombia-fatalities',
                     opacity: 1
                 }
            ],
            onChapterExit: [
                {
                    layer: 'colombia-fatalities',
                    opacity: 0
                }
            ]
        },
// colombia2centralamerica
        {
            id: 'colombia-ca',
            alignment: 'right',
            hidden: false,
            title: '',
            description: '',
            location: {
                center: [-68.64888, 15.31658],
                zoom: 4.77,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
//central america overview
        {
            id: 'ca-overview',
            alignment: 'right',
            hidden: false,
            title: 'Central America Overview',
            description: 'Central America Overview',
            location: {
                center: [-68.64888, 15.31658],
                zoom: 4.77,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
//ca-haiti
        {
            id: 'ca-haiti',
            alignment: 'right',
            hidden: false,
            title: '',
            description: 'placeholder',
            location: {
                center: [-73.03182, 18.99171],
                zoom: 8.03,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
// haiti-1
        {
            id: 'haiti-1',
            alignment: 'left',
            hidden: false,
            title: 'Haiti 1',
            image: 'https://static01.nyt.com/images/2019/09/28/world/28Haiti/28Haiti-superJumbo.jpg?quality=90&auto=webp',
            description: 'Gang violence largely concentrated in impoverished neighborhoods in the capital, Port-au-Prince, is increasing as gangs continue to serve to secure local support for political elites in exchange for resources and impunity from the law. President Jovenel Moise has been suspected of supporting gangs while attempting to further consolidate political control. Recently he has allegedly supported the G-9 gang coalition implicated in over a quarter of gang-related violence against civilians events.',
            location: {
                center: [-73.03182, 18.99171],
                zoom: 8.03,
                pitch: 0.00,
                bearing: 6.40

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'haiti-a',
                    opacity: 1
                },
            

            ],
            onChapterExit: [
                {
                    opacity: 0
                },
                {
                    layer: 'hait-b',
                    opacity: 1
                }
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'haiti-2',
            alignment: 'left',
            hidden: false,
            title: 'Haiti 2',
            image: 'https://static01.nyt.com/images/2019/09/28/world/28Haiti/28Haiti-superJumbo.jpg?quality=90&auto=webp',
            description: 'Gang violence largely concentrated in impoverished neighborhoods in the capital, Port-au-Prince, is increasing as gangs continue to serve to secure local support for political elites in exchange for resources and impunity from the law. President Jovenel Moise has been suspected of supporting gangs while attempting to further consolidate political control. Recently he has allegedly supported the G-9 gang coalition implicated in over a quarter of gang-related violence against civilians events.',
            location: {
                center: [-73.03182, 18.99171],
                zoom: 8.03,
                pitch: 0.00,
                bearing: 6.40

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'haiti-a',
                    opacity: 0
                },
                {
                    layer: 'haiti-b',
                    opacity: 1
                }  
            ],
            onChapterExit: [
                {
                    layer: 'haiti-b',
                    opacity: 0
                },
            ]
        },
//haiti-ee
        {
            id: 'haiti-ee',
            alignment: 'right',
            hidden: true,
            title: '',
            description: '',
            location: {
                center: [23.21148, 48.60935],
                zoom: 4,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

//eastern europe overview
        {
            id: 'ee-overview',
            alignment: 'right',
            hidden: false,
            title: 'EE overview',
            description: 'EE overview',
            location: {
                center: [23.21148, 48.60935],
                zoom: 4,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
//belarus
        {
            id: 'belarus',
            alignment: 'right',
            hidden: false,
            title: 'Belarus placeholder',
            description: 'Belarus placeholder',
            location: {
                center: [27.99373, 53.69264],
                zoom: 6,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'belarus-a',
                opacity: 1},
            ],
            onChapterExit: [  {
                layer: 'belarus-a',
                opacity: 0},]
        },
//belarus-world
        {
            id: 'belarus-world',
            alignment: 'right',
            hidden: false,
            title: 'Belarus2world placeholder',
            description: 'Belarus2Worldplaceholder',
            location: {
                center: [14.22310, 21.33435],
                zoom: 1.46,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

//conclusion
        {
            id: 'conclusion',
            alignment: 'right',
            hidden: false,
            title: 'Conclusion placeholder',
            description: 'Conclusion placeholder',
            location: {
                center: [14.22310, 21.33435],
                zoom: 1.46,
                pitch: 0.00,
                bearing: 0.00

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '10-conflicts-polygons',
                    opacity: 1
                },
                {
                    layer: 'acled-2020-allevents',
                    opacity: 0.5
                }
            ],
            onChapterExit: []
        },
    ]
};