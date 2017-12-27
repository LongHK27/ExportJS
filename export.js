
/**
 * [XLSX description]
 * @param {Object} configs [description]
 */
function XLSX ( configs ) {

	try {

		const _DEFAULT_CONFIGs = {
			_rels: 				'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/Pg0KPFJlbGF0aW9uc2hpcHMgeG1sbnM9Imh0dHA6Ly9zY2hlbWFzLm9wZW54bWxmb3JtYXRzLm9yZy9wYWNrYWdlLzIwMDYvcmVsYXRpb25zaGlwcyI+PFJlbGF0aW9uc2hpcCBJZD0icklkMiIgVHlwZT0iaHR0cDovL3NjaGVtYXMub3BlbnhtbGZvcm1hdHMub3JnL3BhY2thZ2UvMjAwNi9yZWxhdGlvbnNoaXBzL21ldGFkYXRhL2NvcmUtcHJvcGVydGllcyIgVGFyZ2V0PSJkb2NQcm9wcy9jb3JlLnhtbCIvPjxSZWxhdGlvbnNoaXAgSWQ9InJJZDMiIFR5cGU9Imh0dHA6Ly9zY2hlbWFzLm9wZW54bWxmb3JtYXRzLm9yZy9vZmZpY2VEb2N1bWVudC8yMDA2L3JlbGF0aW9uc2hpcHMvZXh0ZW5kZWQtcHJvcGVydGllcyIgVGFyZ2V0PSJkb2NQcm9wcy9hcHAueG1sIi8+PFJlbGF0aW9uc2hpcCBJZD0icklkMSIgVHlwZT0iaHR0cDovL3NjaGVtYXMub3BlbnhtbGZvcm1hdHMub3JnL29mZmljZURvY3VtZW50LzIwMDYvcmVsYXRpb25zaGlwcy9vZmZpY2VEb2N1bWVudCIgVGFyZ2V0PSJ4bC93b3JrYm9vay54bWwiLz48L1JlbGF0aW9uc2hpcHM+',
			docProps: {
				app: 			'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxQcm9wZXJ0aWVzIHhtbG5zPSJodHRwOi8vc2NoZW1hcy5vcGVueG1sZm9ybWF0cy5vcmcvb2ZmaWNlRG9jdW1lbnQvMjAwNi9leHRlbmRlZC1wcm9wZXJ0aWVzIiB4bWxuczp2dD0iaHR0cDovL3NjaGVtYXMub3BlbnhtbGZvcm1hdHMub3JnL29mZmljZURvY3VtZW50LzIwMDYvZG9jUHJvcHNWVHlwZXMiPjxBcHBsaWNhdGlvbj5TaGVldEpTPC9BcHBsaWNhdGlvbj48SGVhZGluZ1BhaXJzPjx2dDp2ZWN0b3Igc2l6ZT0iMiIgYmFzZVR5cGU9InZhcmlhbnQiPjx2dDp2YXJpYW50Pjx2dDpscHN0cj5Xb3Jrc2hlZXRzPC92dDpscHN0cj48L3Z0OnZhcmlhbnQ+PHZ0OnZhcmlhbnQ+PHZ0Omk0PjE8L3Z0Omk0PjwvdnQ6dmFyaWFudD48L3Z0OnZlY3Rvcj48L0hlYWRpbmdQYWlycz48VGl0bGVzT2ZQYXJ0cz48dnQ6dmVjdG9yIHNpemU9IjEiIGJhc2VUeXBlPSJscHN0ciI+PHZ0Omxwc3RyPlNoZWV0IDE8L3Z0Omxwc3RyPjwvdnQ6dmVjdG9yPjwvVGl0bGVzT2ZQYXJ0cz48L1Byb3BlcnRpZXM+',
		 		core: 			'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/Pg0KPGNwOmNvcmVQcm9wZXJ0aWVzIHhtbG5zOmNwPSJodHRwOi8vc2NoZW1hcy5vcGVueG1sZm9ybWF0cy5vcmcvcGFja2FnZS8yMDA2L21ldGFkYXRhL2NvcmUtcHJvcGVydGllcyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpkY3Rlcm1zPSJodHRwOi8vcHVybC5vcmcvZGMvdGVybXMvIiB4bWxuczpkY21pdHlwZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlLyIgeG1sbnM6eHNpPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZSIvPg=='
		 	},
		 	xl: {
				_rels: 			'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/Pg0KPFJlbGF0aW9uc2hpcHMgeG1sbnM9Imh0dHA6Ly9zY2hlbWFzLm9wZW54bWxmb3JtYXRzLm9yZy9wYWNrYWdlLzIwMDYvcmVsYXRpb25zaGlwcyI+PFJlbGF0aW9uc2hpcCBJZD0icklkMSIgVHlwZT0iaHR0cDovL3NjaGVtYXMub3BlbnhtbGZvcm1hdHMub3JnL29mZmljZURvY3VtZW50LzIwMDYvcmVsYXRpb25zaGlwcy93b3Jrc2hlZXQiIFRhcmdldD0id29ya3NoZWV0cy9zaGVldDEueG1sIi8+PFJlbGF0aW9uc2hpcCBJZD0icklkMiIgVHlwZT0iaHR0cDovL3NjaGVtYXMub3BlbnhtbGZvcm1hdHMub3JnL29mZmljZURvY3VtZW50LzIwMDYvcmVsYXRpb25zaGlwcy9zaGFyZWRTdHJpbmdzIiBUYXJnZXQ9InNoYXJlZFN0cmluZ3MueG1sIi8+PFJlbGF0aW9uc2hpcCBJZD0icklkMyIgVHlwZT0iaHR0cDovL3NjaGVtYXMub3BlbnhtbGZvcm1hdHMub3JnL29mZmljZURvY3VtZW50LzIwMDYvcmVsYXRpb25zaGlwcy90aGVtZSIgVGFyZ2V0PSJ0aGVtZS90aGVtZTEueG1sIi8+PFJlbGF0aW9uc2hpcCBJZD0icklkNCIgVHlwZT0iaHR0cDovL3NjaGVtYXMub3BlbnhtbGZvcm1hdHMub3JnL29mZmljZURvY3VtZW50LzIwMDYvcmVsYXRpb25zaGlwcy9zdHlsZXMiIFRhcmdldD0ic3R5bGVzLnhtbCIvPjwvUmVsYXRpb25zaGlwcz4=',
		        theme: 			'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/Pg0KPGE6dGhlbWUgeG1sbnM6YT0iaHR0cDovL3NjaGVtYXMub3BlbnhtbGZvcm1hdHMub3JnL2RyYXdpbmdtbC8yMDA2L21haW4iIG5hbWU9Ik9mZmljZSBUaGVtZSI+PGE6dGhlbWVFbGVtZW50cz48YTpjbHJTY2hlbWUgbmFtZT0iT2ZmaWNlIj48YTpkazE+PGE6c3lzQ2xyIHZhbD0id2luZG93VGV4dCIgbGFzdENscj0iMDAwMDAwIi8+PC9hOmRrMT48YTpsdDE+PGE6c3lzQ2xyIHZhbD0id2luZG93IiBsYXN0Q2xyPSJGRkZGRkYiLz48L2E6bHQxPjxhOmRrMj48YTpzcmdiQ2xyIHZhbD0iMUY0OTdEIi8+PC9hOmRrMj48YTpsdDI+PGE6c3JnYkNsciB2YWw9IkVFRUNFMSIvPjwvYTpsdDI+PGE6YWNjZW50MT48YTpzcmdiQ2xyIHZhbD0iNEY4MUJEIi8+PC9hOmFjY2VudDE+PGE6YWNjZW50Mj48YTpzcmdiQ2xyIHZhbD0iQzA1MDREIi8+PC9hOmFjY2VudDI+PGE6YWNjZW50Mz48YTpzcmdiQ2xyIHZhbD0iOUJCQjU5Ii8+PC9hOmFjY2VudDM+PGE6YWNjZW50ND48YTpzcmdiQ2xyIHZhbD0iODA2NEEyIi8+PC9hOmFjY2VudDQ+PGE6YWNjZW50NT48YTpzcmdiQ2xyIHZhbD0iNEJBQ0M2Ii8+PC9hOmFjY2VudDU+PGE6YWNjZW50Nj48YTpzcmdiQ2xyIHZhbD0iRjc5NjQ2Ii8+PC9hOmFjY2VudDY+PGE6aGxpbms+PGE6c3JnYkNsciB2YWw9IjAwMDBGRiIvPjwvYTpobGluaz48YTpmb2xIbGluaz48YTpzcmdiQ2xyIHZhbD0iODAwMDgwIi8+PC9hOmZvbEhsaW5rPjwvYTpjbHJTY2hlbWU+PGE6Zm9udFNjaGVtZSBuYW1lPSJPZmZpY2UiPjxhOm1ham9yRm9udD48YTpsYXRpbiB0eXBlZmFjZT0iQ2FtYnJpYSIvPjxhOmVhIHR5cGVmYWNlPSIiLz48YTpjcyB0eXBlZmFjZT0iIi8+PGE6Zm9udCBzY3JpcHQ9IkpwYW4iIHR5cGVmYWNlPSLDg8Kvw4LCvMOCwq3Dg8Kvw4LCvMOCwrMgw4PCr8OCwrzDgsKww4PCo8Oi4oKsxaHDgsK0w4PCo8Oi4oKsxaHDgsK3w4PCo8OG4oCZw4bigJnDg8Kjw6LigqzFocOCwq8iLz48YTpmb250IHNjcmlwdD0iSGFuZyIgdHlwZWZhY2U9IsODwqvDgsKnw6LigqzLnMODwqzDgsKdw6LigJrCrCDDg8Kqw4LCs8OCwqDDg8Krw6LigqzCncOi4oKswqIiLz48YTpmb250IHNjcmlwdD0iSGFucyIgdHlwZWZhY2U9IsODwqXDgsKuw6LigqzCucODwqTDgsK9w6LigqzFkyIvPjxhOmZvbnQgc2NyaXB0PSJIYW50IiB0eXBlZmFjZT0iw4PCpsOi4oKs4oCcw4LCsMODwqfDgsK0w4LCsMODwqbDi8WTw4XCvcODwqnDgsKrw6LigqzCnSIvPjxhOmZvbnQgc2NyaXB0PSJBcmFiIiB0eXBlZmFjZT0iVGltZXMgTmV3IFJvbWFuIi8+PGE6Zm9udCBzY3JpcHQ9IkhlYnIiIHR5cGVmYWNlPSJUaW1lcyBOZXcgUm9tYW4iLz48YTpmb250IHNjcmlwdD0iVGhhaSIgdHlwZWZhY2U9IlRhaG9tYSIvPjxhOmZvbnQgc2NyaXB0PSJFdGhpIiB0eXBlZmFjZT0iTnlhbGEiLz48YTpmb250IHNjcmlwdD0iQmVuZyIgdHlwZWZhY2U9IlZyaW5kYSIvPjxhOmZvbnQgc2NyaXB0PSJHdWpyIiB0eXBlZmFjZT0iU2hydXRpIi8+PGE6Zm9udCBzY3JpcHQ9IktobXIiIHR5cGVmYWNlPSJNb29sQm9yYW4iLz48YTpmb250IHNjcmlwdD0iS25kYSIgdHlwZWZhY2U9IlR1bmdhIi8+PGE6Zm9udCBzY3JpcHQ9Ikd1cnUiIHR5cGVmYWNlPSJSYWF2aSIvPjxhOmZvbnQgc2NyaXB0PSJDYW5zIiB0eXBlZmFjZT0iRXVwaGVtaWEiLz48YTpmb250IHNjcmlwdD0iQ2hlciIgdHlwZWZhY2U9IlBsYW50YWdlbmV0IENoZXJva2VlIi8+PGE6Zm9udCBzY3JpcHQ9IllpaWkiIHR5cGVmYWNlPSJNaWNyb3NvZnQgWWkgQmFpdGkiLz48YTpmb250IHNjcmlwdD0iVGlidCIgdHlwZWZhY2U9Ik1pY3Jvc29mdCBIaW1hbGF5YSIvPjxhOmZvbnQgc2NyaXB0PSJUaGFhIiB0eXBlZmFjZT0iTVYgQm9saSIvPjxhOmZvbnQgc2NyaXB0PSJEZXZhIiB0eXBlZmFjZT0iTWFuZ2FsIi8+PGE6Zm9udCBzY3JpcHQ9IlRlbHUiIHR5cGVmYWNlPSJHYXV0YW1pIi8+PGE6Zm9udCBzY3JpcHQ9IlRhbWwiIHR5cGVmYWNlPSJMYXRoYSIvPjxhOmZvbnQgc2NyaXB0PSJTeXJjIiB0eXBlZmFjZT0iRXN0cmFuZ2VsbyBFZGVzc2EiLz48YTpmb250IHNjcmlwdD0iT3J5YSIgdHlwZWZhY2U9IkthbGluZ2EiLz48YTpmb250IHNjcmlwdD0iTWx5bSIgdHlwZWZhY2U9IkthcnRpa2EiLz48YTpmb250IHNjcmlwdD0iTGFvbyIgdHlwZWZhY2U9IkRva0NoYW1wYSIvPjxhOmZvbnQgc2NyaXB0PSJTaW5oIiB0eXBlZmFjZT0iSXNrb29sYSBQb3RhIi8+PGE6Zm9udCBzY3JpcHQ9Ik1vbmciIHR5cGVmYWNlPSJNb25nb2xpYW4gQmFpdGkiLz48YTpmb250IHNjcmlwdD0iVmlldCIgdHlwZWZhY2U9IlRpbWVzIE5ldyBSb21hbiIvPjxhOmZvbnQgc2NyaXB0PSJVaWdoIiB0eXBlZmFjZT0iTWljcm9zb2Z0IFVpZ2h1ciIvPjxhOmZvbnQgc2NyaXB0PSJHZW9yIiB0eXBlZmFjZT0iU3lsZmFlbiIvPjwvYTptYWpvckZvbnQ+PGE6bWlub3JGb250PjxhOmxhdGluIHR5cGVmYWNlPSJDYWxpYnJpIi8+PGE6ZWEgdHlwZWZhY2U9IiIvPjxhOmNzIHR5cGVmYWNlPSIiLz48YTpmb250IHNjcmlwdD0iSnBhbiIgdHlwZWZhY2U9IsODwq/DgsK8w4LCrcODwq/DgsK8w4LCsyDDg8Kvw4LCvMOCwrDDg8Kjw6LigqzFocOCwrTDg8Kjw6LigqzFocOCwrfDg8Kjw4bigJnDhuKAmcODwqPDouKCrMWhw4LCryIvPjxhOmZvbnQgc2NyaXB0PSJIYW5nIiB0eXBlZmFjZT0iw4PCq8OCwqfDouKCrMucw4PCrMOCwp3DouKAmsKsIMODwqrDgsKzw4LCoMODwqvDouKCrMKdw6LigqzCoiIvPjxhOmZvbnQgc2NyaXB0PSJIYW5zIiB0eXBlZmFjZT0iw4PCpcOCwq7DouKCrMK5w4PCpMOCwr3DouKCrMWTIi8+PGE6Zm9udCBzY3JpcHQ9IkhhbnQiIHR5cGVmYWNlPSLDg8Kmw6LigqzigJzDgsKww4PCp8OCwrTDgsKww4PCpsOLxZPDhcK9w4PCqcOCwqvDouKCrMKdIi8+PGE6Zm9udCBzY3JpcHQ9IkFyYWIiIHR5cGVmYWNlPSJBcmlhbCIvPjxhOmZvbnQgc2NyaXB0PSJIZWJyIiB0eXBlZmFjZT0iQXJpYWwiLz48YTpmb250IHNjcmlwdD0iVGhhaSIgdHlwZWZhY2U9IlRhaG9tYSIvPjxhOmZvbnQgc2NyaXB0PSJFdGhpIiB0eXBlZmFjZT0iTnlhbGEiLz48YTpmb250IHNjcmlwdD0iQmVuZyIgdHlwZWZhY2U9IlZyaW5kYSIvPjxhOmZvbnQgc2NyaXB0PSJHdWpyIiB0eXBlZmFjZT0iU2hydXRpIi8+PGE6Zm9udCBzY3JpcHQ9IktobXIiIHR5cGVmYWNlPSJEYXVuUGVuaCIvPjxhOmZvbnQgc2NyaXB0PSJLbmRhIiB0eXBlZmFjZT0iVHVuZ2EiLz48YTpmb250IHNjcmlwdD0iR3VydSIgdHlwZWZhY2U9IlJhYXZpIi8+PGE6Zm9udCBzY3JpcHQ9IkNhbnMiIHR5cGVmYWNlPSJFdXBoZW1pYSIvPjxhOmZvbnQgc2NyaXB0PSJDaGVyIiB0eXBlZmFjZT0iUGxhbnRhZ2VuZXQgQ2hlcm9rZWUiLz48YTpmb250IHNjcmlwdD0iWWlpaSIgdHlwZWZhY2U9Ik1pY3Jvc29mdCBZaSBCYWl0aSIvPjxhOmZvbnQgc2NyaXB0PSJUaWJ0IiB0eXBlZmFjZT0iTWljcm9zb2Z0IEhpbWFsYXlhIi8+PGE6Zm9udCBzY3JpcHQ9IlRoYWEiIHR5cGVmYWNlPSJNViBCb2xpIi8+PGE6Zm9udCBzY3JpcHQ9IkRldmEiIHR5cGVmYWNlPSJNYW5nYWwiLz48YTpmb250IHNjcmlwdD0iVGVsdSIgdHlwZWZhY2U9IkdhdXRhbWkiLz48YTpmb250IHNjcmlwdD0iVGFtbCIgdHlwZWZhY2U9IkxhdGhhIi8+PGE6Zm9udCBzY3JpcHQ9IlN5cmMiIHR5cGVmYWNlPSJFc3RyYW5nZWxvIEVkZXNzYSIvPjxhOmZvbnQgc2NyaXB0PSJPcnlhIiB0eXBlZmFjZT0iS2FsaW5nYSIvPjxhOmZvbnQgc2NyaXB0PSJNbHltIiB0eXBlZmFjZT0iS2FydGlrYSIvPjxhOmZvbnQgc2NyaXB0PSJMYW9vIiB0eXBlZmFjZT0iRG9rQ2hhbXBhIi8+PGE6Zm9udCBzY3JpcHQ9IlNpbmgiIHR5cGVmYWNlPSJJc2tvb2xhIFBvdGEiLz48YTpmb250IHNjcmlwdD0iTW9uZyIgdHlwZWZhY2U9Ik1vbmdvbGlhbiBCYWl0aSIvPjxhOmZvbnQgc2NyaXB0PSJWaWV0IiB0eXBlZmFjZT0iQXJpYWwiLz48YTpmb250IHNjcmlwdD0iVWlnaCIgdHlwZWZhY2U9Ik1pY3Jvc29mdCBVaWdodXIiLz48YTpmb250IHNjcmlwdD0iR2VvciIgdHlwZWZhY2U9IlN5bGZhZW4iLz48L2E6bWlub3JGb250PjwvYTpmb250U2NoZW1lPjxhOmZtdFNjaGVtZSBuYW1lPSJPZmZpY2UiPjxhOmZpbGxTdHlsZUxzdD48YTpzb2xpZEZpbGw+PGE6c2NoZW1lQ2xyIHZhbD0icGhDbHIiLz48L2E6c29saWRGaWxsPjxhOmdyYWRGaWxsIHJvdFdpdGhTaGFwZT0iMSI+PGE6Z3NMc3Q+PGE6Z3MgcG9zPSIwIj48YTpzY2hlbWVDbHIgdmFsPSJwaENsciI+PGE6dGludCB2YWw9IjUwMDAwIi8+PGE6c2F0TW9kIHZhbD0iMzAwMDAwIi8+PC9hOnNjaGVtZUNscj48L2E6Z3M+PGE6Z3MgcG9zPSIzNTAwMCI+PGE6c2NoZW1lQ2xyIHZhbD0icGhDbHIiPjxhOnRpbnQgdmFsPSIzNzAwMCIvPjxhOnNhdE1vZCB2YWw9IjMwMDAwMCIvPjwvYTpzY2hlbWVDbHI+PC9hOmdzPjxhOmdzIHBvcz0iMTAwMDAwIj48YTpzY2hlbWVDbHIgdmFsPSJwaENsciI+PGE6dGludCB2YWw9IjE1MDAwIi8+PGE6c2F0TW9kIHZhbD0iMzUwMDAwIi8+PC9hOnNjaGVtZUNscj48L2E6Z3M+PC9hOmdzTHN0PjxhOmxpbiBhbmc9IjE2MjAwMDAwIiBzY2FsZWQ9IjEiLz48L2E6Z3JhZEZpbGw+PGE6Z3JhZEZpbGwgcm90V2l0aFNoYXBlPSIxIj48YTpnc0xzdD48YTpncyBwb3M9IjAiPjxhOnNjaGVtZUNsciB2YWw9InBoQ2xyIj48YTp0aW50IHZhbD0iMTAwMDAwIi8+PGE6c2hhZGUgdmFsPSIxMDAwMDAiLz48YTpzYXRNb2QgdmFsPSIxMzAwMDAiLz48L2E6c2NoZW1lQ2xyPjwvYTpncz48YTpncyBwb3M9IjEwMDAwMCI+PGE6c2NoZW1lQ2xyIHZhbD0icGhDbHIiPjxhOnRpbnQgdmFsPSI1MDAwMCIvPjxhOnNoYWRlIHZhbD0iMTAwMDAwIi8+PGE6c2F0TW9kIHZhbD0iMzUwMDAwIi8+PC9hOnNjaGVtZUNscj48L2E6Z3M+PC9hOmdzTHN0PjxhOmxpbiBhbmc9IjE2MjAwMDAwIiBzY2FsZWQ9IjAiLz48L2E6Z3JhZEZpbGw+PC9hOmZpbGxTdHlsZUxzdD48YTpsblN0eWxlTHN0PjxhOmxuIHc9Ijk1MjUiIGNhcD0iZmxhdCIgY21wZD0ic25nIiBhbGduPSJjdHIiPjxhOnNvbGlkRmlsbD48YTpzY2hlbWVDbHIgdmFsPSJwaENsciI+PGE6c2hhZGUgdmFsPSI5NTAwMCIvPjxhOnNhdE1vZCB2YWw9IjEwNTAwMCIvPjwvYTpzY2hlbWVDbHI+PC9hOnNvbGlkRmlsbD48YTpwcnN0RGFzaCB2YWw9InNvbGlkIi8+PC9hOmxuPjxhOmxuIHc9IjI1NDAwIiBjYXA9ImZsYXQiIGNtcGQ9InNuZyIgYWxnbj0iY3RyIj48YTpzb2xpZEZpbGw+PGE6c2NoZW1lQ2xyIHZhbD0icGhDbHIiLz48L2E6c29saWRGaWxsPjxhOnByc3REYXNoIHZhbD0ic29saWQiLz48L2E6bG4+PGE6bG4gdz0iMzgxMDAiIGNhcD0iZmxhdCIgY21wZD0ic25nIiBhbGduPSJjdHIiPjxhOnNvbGlkRmlsbD48YTpzY2hlbWVDbHIgdmFsPSJwaENsciIvPjwvYTpzb2xpZEZpbGw+PGE6cHJzdERhc2ggdmFsPSJzb2xpZCIvPjwvYTpsbj48L2E6bG5TdHlsZUxzdD48YTplZmZlY3RTdHlsZUxzdD48YTplZmZlY3RTdHlsZT48YTplZmZlY3RMc3Q+PGE6b3V0ZXJTaGR3IGJsdXJSYWQ9IjQwMDAwIiBkaXN0PSIyMDAwMCIgZGlyPSI1NDAwMDAwIiByb3RXaXRoU2hhcGU9IjAiPjxhOnNyZ2JDbHIgdmFsPSIwMDAwMDAiPjxhOmFscGhhIHZhbD0iMzgwMDAiLz48L2E6c3JnYkNscj48L2E6b3V0ZXJTaGR3PjwvYTplZmZlY3RMc3Q+PC9hOmVmZmVjdFN0eWxlPjxhOmVmZmVjdFN0eWxlPjxhOmVmZmVjdExzdD48YTpvdXRlclNoZHcgYmx1clJhZD0iNDAwMDAiIGRpc3Q9IjIzMDAwIiBkaXI9IjU0MDAwMDAiIHJvdFdpdGhTaGFwZT0iMCI+PGE6c3JnYkNsciB2YWw9IjAwMDAwMCI+PGE6YWxwaGEgdmFsPSIzNTAwMCIvPjwvYTpzcmdiQ2xyPjwvYTpvdXRlclNoZHc+PC9hOmVmZmVjdExzdD48L2E6ZWZmZWN0U3R5bGU+PGE6ZWZmZWN0U3R5bGU+PGE6ZWZmZWN0THN0PjxhOm91dGVyU2hkdyBibHVyUmFkPSI0MDAwMCIgZGlzdD0iMjMwMDAiIGRpcj0iNTQwMDAwMCIgcm90V2l0aFNoYXBlPSIwIj48YTpzcmdiQ2xyIHZhbD0iMDAwMDAwIj48YTphbHBoYSB2YWw9IjM1MDAwIi8+PC9hOnNyZ2JDbHI+PC9hOm91dGVyU2hkdz48L2E6ZWZmZWN0THN0PjxhOnNjZW5lM2Q+PGE6Y2FtZXJhIHByc3Q9Im9ydGhvZ3JhcGhpY0Zyb250Ij48YTpyb3QgbGF0PSIwIiBsb249IjAiIHJldj0iMCIvPjwvYTpjYW1lcmE+PGE6bGlnaHRSaWcgcmlnPSJ0aHJlZVB0IiBkaXI9InQiPjxhOnJvdCBsYXQ9IjAiIGxvbj0iMCIgcmV2PSIxMjAwMDAwIi8+PC9hOmxpZ2h0UmlnPjwvYTpzY2VuZTNkPjxhOnNwM2Q+PGE6YmV2ZWxUIHc9IjYzNTAwIiBoPSIyNTQwMCIvPjwvYTpzcDNkPjwvYTplZmZlY3RTdHlsZT48L2E6ZWZmZWN0U3R5bGVMc3Q+PGE6YmdGaWxsU3R5bGVMc3Q+PGE6c29saWRGaWxsPjxhOnNjaGVtZUNsciB2YWw9InBoQ2xyIi8+PC9hOnNvbGlkRmlsbD48YTpncmFkRmlsbCByb3RXaXRoU2hhcGU9IjEiPjxhOmdzTHN0PjxhOmdzIHBvcz0iMCI+PGE6c2NoZW1lQ2xyIHZhbD0icGhDbHIiPjxhOnRpbnQgdmFsPSI0MDAwMCIvPjxhOnNhdE1vZCB2YWw9IjM1MDAwMCIvPjwvYTpzY2hlbWVDbHI+PC9hOmdzPjxhOmdzIHBvcz0iNDAwMDAiPjxhOnNjaGVtZUNsciB2YWw9InBoQ2xyIj48YTp0aW50IHZhbD0iNDUwMDAiLz48YTpzaGFkZSB2YWw9Ijk5MDAwIi8+PGE6c2F0TW9kIHZhbD0iMzUwMDAwIi8+PC9hOnNjaGVtZUNscj48L2E6Z3M+PGE6Z3MgcG9zPSIxMDAwMDAiPjxhOnNjaGVtZUNsciB2YWw9InBoQ2xyIj48YTpzaGFkZSB2YWw9IjIwMDAwIi8+PGE6c2F0TW9kIHZhbD0iMjU1MDAwIi8+PC9hOnNjaGVtZUNscj48L2E6Z3M+PC9hOmdzTHN0PjxhOnBhdGggcGF0aD0iY2lyY2xlIj48YTpmaWxsVG9SZWN0IGw9IjUwMDAwIiB0PSItODAwMDAiIHI9IjUwMDAwIiBiPSIxODAwMDAiLz48L2E6cGF0aD48L2E6Z3JhZEZpbGw+PGE6Z3JhZEZpbGwgcm90V2l0aFNoYXBlPSIxIj48YTpnc0xzdD48YTpncyBwb3M9IjAiPjxhOnNjaGVtZUNsciB2YWw9InBoQ2xyIj48YTp0aW50IHZhbD0iODAwMDAiLz48YTpzYXRNb2QgdmFsPSIzMDAwMDAiLz48L2E6c2NoZW1lQ2xyPjwvYTpncz48YTpncyBwb3M9IjEwMDAwMCI+PGE6c2NoZW1lQ2xyIHZhbD0icGhDbHIiPjxhOnNoYWRlIHZhbD0iMzAwMDAiLz48YTpzYXRNb2QgdmFsPSIyMDAwMDAiLz48L2E6c2NoZW1lQ2xyPjwvYTpncz48L2E6Z3NMc3Q+PGE6cGF0aCBwYXRoPSJjaXJjbGUiPjxhOmZpbGxUb1JlY3QgbD0iNTAwMDAiIHQ9IjUwMDAwIiByPSI1MDAwMCIgYj0iNTAwMDAiLz48L2E6cGF0aD48L2E6Z3JhZEZpbGw+PC9hOmJnRmlsbFN0eWxlTHN0PjwvYTpmbXRTY2hlbWU+PC9hOnRoZW1lRWxlbWVudHM+PGE6b2JqZWN0RGVmYXVsdHM+PGE6c3BEZWY+PGE6c3BQci8+PGE6Ym9keVByLz48YTpsc3RTdHlsZS8+PGE6c3R5bGU+PGE6bG5SZWYgaWR4PSIxIj48YTpzY2hlbWVDbHIgdmFsPSJhY2NlbnQxIi8+PC9hOmxuUmVmPjxhOmZpbGxSZWYgaWR4PSIzIj48YTpzY2hlbWVDbHIgdmFsPSJhY2NlbnQxIi8+PC9hOmZpbGxSZWY+PGE6ZWZmZWN0UmVmIGlkeD0iMiI+PGE6c2NoZW1lQ2xyIHZhbD0iYWNjZW50MSIvPjwvYTplZmZlY3RSZWY+PGE6Zm9udFJlZiBpZHg9Im1pbm9yIj48YTpzY2hlbWVDbHIgdmFsPSJsdDEiLz48L2E6Zm9udFJlZj48L2E6c3R5bGU+PC9hOnNwRGVmPjxhOmxuRGVmPjxhOnNwUHIvPjxhOmJvZHlQci8+PGE6bHN0U3R5bGUvPjxhOnN0eWxlPjxhOmxuUmVmIGlkeD0iMiI+PGE6c2NoZW1lQ2xyIHZhbD0iYWNjZW50MSIvPjwvYTpsblJlZj48YTpmaWxsUmVmIGlkeD0iMCI+PGE6c2NoZW1lQ2xyIHZhbD0iYWNjZW50MSIvPjwvYTpmaWxsUmVmPjxhOmVmZmVjdFJlZiBpZHg9IjEiPjxhOnNjaGVtZUNsciB2YWw9ImFjY2VudDEiLz48L2E6ZWZmZWN0UmVmPjxhOmZvbnRSZWYgaWR4PSJtaW5vciI+PGE6c2NoZW1lQ2xyIHZhbD0idHgxIi8+PC9hOmZvbnRSZWY+PC9hOnN0eWxlPjwvYTpsbkRlZj48L2E6b2JqZWN0RGVmYXVsdHM+PGE6ZXh0cmFDbHJTY2hlbWVMc3QvPjwvYTp0aGVtZT4=',
		        worksheets: 	'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/Pjx3b3Jrc2hlZXQgeG1sbnM9Imh0dHA6Ly9zY2hlbWFzLm9wZW54bWxmb3JtYXRzLm9yZy9zcHJlYWRzaGVldG1sLzIwMDYvbWFpbiIgeG1sbnM6cj0iaHR0cDovL3NjaGVtYXMub3BlbnhtbGZvcm1hdHMub3JnL29mZmljZURvY3VtZW50LzIwMDYvcmVsYXRpb25zaGlwcyI+PHNoZWV0UHIgY29kZU5hbWU9IlNoZWV0IDEiLz48ZGltZW5zaW9uIHJlZj0iQTEiLz48c2hlZXRWaWV3cz48c2hlZXRWaWV3IHdvcmtib29rVmlld0lkPSIwIi8+PC9zaGVldFZpZXdzPjxzaGVldERhdGE+PC9zaGVldERhdGE+PC93b3Jrc2hlZXQ+',
		        styles: 		'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/Pg0KPHN0eWxlU2hlZXQgeG1sbnM9Imh0dHA6Ly9zY2hlbWFzLm9wZW54bWxmb3JtYXRzLm9yZy9zcHJlYWRzaGVldG1sLzIwMDYvbWFpbiIgeG1sbnM6dnQ9Imh0dHA6Ly9zY2hlbWFzLm9wZW54bWxmb3JtYXRzLm9yZy9vZmZpY2VEb2N1bWVudC8yMDA2L2RvY1Byb3BzVlR5cGVzIj48bnVtRm10cyBjb3VudD0iMSI+PG51bUZtdCBudW1GbXRJZD0iNTYiIGZvcm1hdENvZGU9IiZxdW90O8ODwqTDgsK4w4XCoMODwqXDgsKNw4vigKAvw4PCpMOCwrjDouKCrMK5w4PCpcOCwo3Di+KAoCAmcXVvdDtoaCZxdW90O8ODwqbDouKAnsKiw6LigqzFoSZxdW90O21tJnF1b3Q7w4PCpcOL4oCgw6LigqzCoCZxdW90O3NzJnF1b3Q7w4PCp8OCwqfDouKCrOKEoiAmcXVvdDsiLz48L251bUZtdHM+PGZvbnRzIGNvdW50PSIxIj48Zm9udD48c3ogdmFsPSIxMiIvPjxjb2xvciB0aGVtZT0iMSIvPjxuYW1lIHZhbD0iQ2FsaWJyaSIvPjxmYW1pbHkgdmFsPSIyIi8+PHNjaGVtZSB2YWw9Im1pbm9yIi8+PC9mb250PjwvZm9udHM+PGZpbGxzIGNvdW50PSIyIj48ZmlsbD48cGF0dGVybkZpbGwgcGF0dGVyblR5cGU9Im5vbmUiLz48L2ZpbGw+PGZpbGw+PHBhdHRlcm5GaWxsIHBhdHRlcm5UeXBlPSJncmF5MTI1Ii8+PC9maWxsPjwvZmlsbHM+PGJvcmRlcnMgY291bnQ9IjEiPjxib3JkZXI+PGxlZnQvPjxyaWdodC8+PHRvcC8+PGJvdHRvbS8+PGRpYWdvbmFsLz48L2JvcmRlcj48L2JvcmRlcnM+PGNlbGxTdHlsZVhmcyBjb3VudD0iMSI+PHhmIG51bUZtdElkPSIwIiBmb250SWQ9IjAiIGZpbGxJZD0iMCIgYm9yZGVySWQ9IjAiLz48L2NlbGxTdHlsZVhmcz48Y2VsbFhmcyBjb3VudD0iMSI+PHhmIG51bUZtdElkPSIwIiBmb250SWQ9IjAiIGZpbGxJZD0iMCIgYm9yZGVySWQ9IjAiIHhmSWQ9IjAiIGFwcGx5TnVtYmVyRm9ybWF0PSIxIi8+PC9jZWxsWGZzPjxjZWxsU3R5bGVzIGNvdW50PSIxIj48Y2VsbFN0eWxlIG5hbWU9Ik5vcm1hbCIgeGZJZD0iMCIgYnVpbHRpbklkPSIwIi8+PC9jZWxsU3R5bGVzPjxkeGZzIGNvdW50PSIwIi8+PHRhYmxlU3R5bGVzIGNvdW50PSIwIiBkZWZhdWx0VGFibGVTdHlsZT0iVGFibGVTdHlsZU1lZGl1bTkiIGRlZmF1bHRQaXZvdFN0eWxlPSJQaXZvdFN0eWxlTWVkaXVtNCIvPjwvc3R5bGVTaGVldD4=',
		        workbook: 		'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/Pg0KPHdvcmtib29rIHhtbG5zPSJodHRwOi8vc2NoZW1hcy5vcGVueG1sZm9ybWF0cy5vcmcvc3ByZWFkc2hlZXRtbC8yMDA2L21haW4iIHhtbG5zOnI9Imh0dHA6Ly9zY2hlbWFzLm9wZW54bWxmb3JtYXRzLm9yZy9vZmZpY2VEb2N1bWVudC8yMDA2L3JlbGF0aW9uc2hpcHMiPjx3b3JrYm9va1ByIGNvZGVOYW1lPSJUaGlzV29ya2Jvb2siLz48c2hlZXRzPjxzaGVldCBuYW1lPSJTaGVldCAxIiBzaGVldElkPSIxIiByOmlkPSJySWQxIi8+PC9zaGVldHM+PC93b3JrYm9vaz4=',
		        sharedStrings: 	'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/Pjxzc3QgeG1sbnM9Imh0dHA6Ly9zY2hlbWFzLm9wZW54bWxmb3JtYXRzLm9yZy9zcHJlYWRzaGVldG1sLzIwMDYvbWFpbiIgY291bnQ9IjAiIHVuaXF1ZUNvdW50PSIwIj48L3NzdD4='
		    },
		    ContentTypes: 		"PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxUeXBlcyB4bWxucz0iaHR0cDovL3NjaGVtYXMub3BlbnhtbGZvcm1hdHMub3JnL3BhY2thZ2UvMjAwNi9jb250ZW50LXR5cGVzIiB4bWxuczp4c2Q9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hIiB4bWxuczp4c2k9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlIj48RGVmYXVsdCBFeHRlbnNpb249InhtbCIgQ29udGVudFR5cGU9ImFwcGxpY2F0aW9uL3htbCIvPjxEZWZhdWx0IEV4dGVuc2lvbj0iYmluIiBDb250ZW50VHlwZT0iYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsLnNoZWV0LmJpbmFyeS5tYWNyb0VuYWJsZWQubWFpbiIvPjxEZWZhdWx0IEV4dGVuc2lvbj0idm1sIiBDb250ZW50VHlwZT0iYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnZtbERyYXdpbmciLz48RGVmYXVsdCBFeHRlbnNpb249ImJtcCIgQ29udGVudFR5cGU9ImltYWdlL2JtcCIvPjxEZWZhdWx0IEV4dGVuc2lvbj0icG5nIiBDb250ZW50VHlwZT0iaW1hZ2UvcG5nIi8+PERlZmF1bHQgRXh0ZW5zaW9uPSJnaWYiIENvbnRlbnRUeXBlPSJpbWFnZS9naWYiLz48RGVmYXVsdCBFeHRlbnNpb249ImVtZiIgQ29udGVudFR5cGU9ImltYWdlL3gtZW1mIi8+PERlZmF1bHQgRXh0ZW5zaW9uPSJ3bWYiIENvbnRlbnRUeXBlPSJpbWFnZS94LXdtZiIvPjxEZWZhdWx0IEV4dGVuc2lvbj0ianBnIiBDb250ZW50VHlwZT0iaW1hZ2UvanBlZyIvPjxEZWZhdWx0IEV4dGVuc2lvbj0ianBlZyIgQ29udGVudFR5cGU9ImltYWdlL2pwZWciLz48RGVmYXVsdCBFeHRlbnNpb249InRpZiIgQ29udGVudFR5cGU9ImltYWdlL3RpZmYiLz48RGVmYXVsdCBFeHRlbnNpb249InRpZmYiIENvbnRlbnRUeXBlPSJpbWFnZS90aWZmIi8+PERlZmF1bHQgRXh0ZW5zaW9uPSJwZGYiIENvbnRlbnRUeXBlPSJhcHBsaWNhdGlvbi9wZGYiLz48RGVmYXVsdCBFeHRlbnNpb249InJlbHMiIENvbnRlbnRUeXBlPSJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtcGFja2FnZS5yZWxhdGlvbnNoaXBzK3htbCIvPjxPdmVycmlkZSBQYXJ0TmFtZT0iL3hsL3dvcmtib29rLnhtbCIgQ29udGVudFR5cGU9ImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnNoZWV0Lm1haW4reG1sIi8+PE92ZXJyaWRlIFBhcnROYW1lPSIveGwvd29ya3NoZWV0cy9zaGVldDEueG1sIiBDb250ZW50VHlwZT0iYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwud29ya3NoZWV0K3htbCIvPjxPdmVycmlkZSBQYXJ0TmFtZT0iL3hsL3RoZW1lL3RoZW1lMS54bWwiIENvbnRlbnRUeXBlPSJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQudGhlbWUreG1sIi8+PE92ZXJyaWRlIFBhcnROYW1lPSIveGwvc2hhcmVkU3RyaW5ncy54bWwiIENvbnRlbnRUeXBlPSJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGFyZWRTdHJpbmdzK3htbCIvPjxPdmVycmlkZSBQYXJ0TmFtZT0iL3hsL3N0eWxlcy54bWwiIENvbnRlbnRUeXBlPSJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zdHlsZXMreG1sIi8+PE92ZXJyaWRlIFBhcnROYW1lPSIvZG9jUHJvcHMvY29yZS54bWwiIENvbnRlbnRUeXBlPSJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtcGFja2FnZS5jb3JlLXByb3BlcnRpZXMreG1sIi8+PE92ZXJyaWRlIFBhcnROYW1lPSIvZG9jUHJvcHMvYXBwLnhtbCIgQ29udGVudFR5cGU9ImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5leHRlbmRlZC1wcm9wZXJ0aWVzK3htbCIvPjwvVHlwZXM+"
		};
		const _XLSX = this;
		this.pathToLib 		= null;
		this.linkGetData 	= null;
		this.paramsFilter 	= [];
		this.columnNames	= [];
		this.dataTemplate	= [];
		this.fileName		= "exportJS";

		let helper 				= null;
		let getDataWorker 		= null;
		let generateWorker 		= null;
		let loadLibraryPromise 	= null;
		let xlsx_canvas_handle	= null;

		/**
		 * [configs description]
		 * @param  {[type]} configs [description]
		 * @return {[type]}         [description]
		 */
		this.configs = function(configs) {
            console.log(configs);
            
            if (!configs.xlsxTemplate) {
                configs.xlsxTemplate = {
                    _rel 	: _DEFAULT_CONFIGs.xl._rels,
                    sheet  	: _DEFAULT_CONFIGs.xl.worksheets,
                    sharedString : _DEFAULT_CONFIGs.xl.sharedStrings,
                    styles	: _DEFAULT_CONFIGs.xl.styles,
                    theme 	: _DEFAULT_CONFIGs.xl.theme,
                    workbook : _DEFAULT_CONFIGs.xl.workbook
                };
            }
            
			this.pathToLib 		= configs.pathToLib;
			this.linkGetData 	= configs.linkGetData;
			this.paramsFilter 	= configs.paramsFilter;
			this.columnNames	= configs.columnNames;
			this.dataTemplate	= configs.dataTemplate;
			this.fileName		= configs.fileName;

			return configs.xlsxTemplate;
		};

		if(!!configs) {
			configs.xlsxTemplate = this.configs(configs);
		} else {
            throw new Error("undefine of config");
        }

		if(!window.Promise || !window.Worker) {
			throw new Error("Your browser not support!");
		}

		if(!jQuery){
			throw new Error("Need to jQuery library!");
		}

		/**
		 * [getWorker description]
		 * @param  {[type]} path [description]
		 * @return {[type]}      [description]
		 */
		function getWorker(path) {
			return new Promise( function (resolve, reject) {
				let worker = new Worker(path);

				let handleInterval = setInterval(function(){
					if(!!worker){
						clearInterval(handleInterval);
						 resolve(worker);
					}
				}, 50);

				setTimeout(function(){
					clearInterval(handleInterval);
					reject(new Error("Could not load worker " + path));
				}, 5000);
			});
		}

		/**
		 * [getHelper description]
		 * @return {[type]} [description]
		 */
		function getHelper() {
			return new Promise(function(resolve, reject) {
				$.getScript(_XLSX.pathToLib + "exportJS/helper.js")
				.done( function(script_text) {

					if(!script_text) reject(new Error("Could not load library!"));
					eval(script_text);
					let helper_promise = new Helper();
					//console.log(helper_promise);
					if(!!helper_promise) {
						resolve(helper_promise);
					} else {
						reject(new Error("Could not load library!"));
					}
					
				}).fail(function(jqxhr, setting, ex){
					reject(ex);
				});
			});
		}

		function loadScript(lib) {
			return new Promise(function (resolve, reject) {
				$.getScript(_XLSX.pathToLib + "exportJS/" + lib + ".js")
				.done( function(script_text) {
					
					if(!!script_text) {
						eval(script_text);
						resolve();
					} else {
						reject(new Error("Could not load " + lib + " library!"));
					}
					
				})
				.fail(function(jqxhr, setting, ex){
					reject(ex);
				});
			});
		}
		loadScript("FileSaver.min")
		.then( function () {
			return loadScript("jszip.min");
		})
		.then( function () {
			return getWorker(_XLSX.pathToLib + "exportJS/get-data-worker.js");
		})
		.then( function(worker) {

			//load getDataWorker successfully
			getDataWorker = worker;
			return getWorker(_XLSX.pathToLib + "exportJS/generate-worker.js");
		})
		.then( function (worker) {

			//load generateWorker successfully
			generateWorker = worker;
			return getHelper();
		})
		.then( function (helper) {

			//load helper successfully
			helper = helper;
            
			let container = document.createElement('div');
			container.style.cssText = 'position:absolute;bottom:4px; right: 2px;width:300px;height:50px;box-shadow:1px 1px 10px 2px #c0c0c0; border:1px solid #c0c0c0; opacity:1;z-index:100;background:#fff;padding : 10px;';
			
			let templateInit = {
	        	sheet 			: initSheet(configs.xlsxTemplate.sheet),
	        	sharedStrings 	: initSharedString(configs.xlsxTemplate.sharedString)
	        };
            

	        function onCancel () {
	        	getDataWorker.terminate();
	        	generateWorker.terminate();

	        	jQuery(xlsx_canvas_handle.container).animate({
	        		right: '-280px'},
	        		'slow', function() {
	        			xlsx_canvas_handle.container.remove();
	        	});

	        }

	        xlsx_canvas_handle = CreateExportView( onCancel );

	        var width = xlsx_canvas_handle.xlsx_ctx.canvas.width;
	        var height = xlsx_canvas_handle.xlsx_ctx.canvas.height;

	        let headers = {};
	        if(!!configs.columnNames.length && configs.columnNames.length == configs.dataTemplate.length){
	        	configs.columnNames.forEach(function(colName, index) {
		        	headers[configs.dataTemplate[index]] = colName;
		        });
	        }

			// getDataWorker handle message
			getDataWorker.onmessage = function(e) {
			
				switch(e.data.type){
					case 'log':
						console.log(e.data.log);
						break;
					case 'view':
						
						break;
					case 'push':
						generateWorker.postMessage({type : 'push', pageData : e.data.pageData})
						break;
					case 'end':
						generateWorker.postMessage({type : 'show'});
						generateWorker.postMessage({type : 'get'});
						break;
					default: break;
				}

				if(!!e.data) delete e.data;
			}

			// generateWorker handle message
			generateWorker.onmessage = function(e){

				switch(e.data.type){

					case 'show' :
						console.log('Data', e.data.data);
						break;
					case 'log' :
						DrawExcelCanvas(xlsx_canvas_handle.xlsx_ctx, xlsx_canvas_handle.row_info, width, height, e.data.log.row, e.data.log.total);
						break;
					case 'save':
						let last_template = e.data.template;

						create(last_template);
						delete last_template;
						delete templateInit;
						getDataWorker.terminate();
						generateWorker.terminate();

						xlsx_canvas_handle.container.remove();
						break;

					default: break;
				}
			}
			
			// --------------------- MAIN THREAD -------------------------- //

			getDataWorker.postMessage({ 
				type : 'init', 
				configs : {
					pathToLib 		: _XLSX.pathToLib,
					linkGetData		: _XLSX.linkGetData,
					paramsFilter 	: _XLSX.paramsFilter
				}
			});

			generateWorker.postMessage({
				type 			: 'init',
				template 		: templateInit,
				dataTemplate 	: configs.dataTemplate
			});

			generateWorker.postMessage({
				type 	: 'addHeader',
				headers : headers
			});

			getDataWorker.postMessage({
				type 	: 'load',
				params 	: null
			})

			//create(templateInit);

			// ---------------------------------------------- //
			function initXLSX () {
				let sheets = initSheet(configs.xlsxTemplate.sheet);
				let sharedStrings = initSharedString(configs.xlsxTemplate.sharedString);
			}

			// ---------------------------------------------- //
		    function initSheet (sheetEncode) {
		        
		        try {
		            
		            let worksheet_xml   = helper.b64_to_utf8(sheetEncode);
		            let worksheet_doc   = jQuery.parseXML(worksheet_xml);
		            let ws 				= worksheet_doc.children[0];
		            let ws_child        = ws.children;
		            let tag 			= helper.getTextOnlyTag(ws);
		            
		            let sheetObj       		= new Object();
		            sheetObj.start     		= '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' + tag.start;
		            sheetObj.content   		= '';
		            sheetObj.end       		= '</sheetData>';
		            sheetObj.count     		= 0;
		            sheetObj.attributes 	= '';
		            sheetObj.columnStyle 	= {};
		            
		            let isBeforeSheetData = true;
		            let isEmpty = true;

		            for(let i = 0; i < ws_child.length; i++){
		                
		                if(ws_child[i].nodeName === "sheetData") {
		                    sheetObj.start += '<sheetData>';
		                    
		                    let node = ws_child[i].lastChild;

		                    //đếm số dòng đã có;
		                    while(!!node && !!node.attributes.r && parseInt(node.attributes.r.value) >= 0){
		                        isEmpty = helper.isRowEmpty(node);
		                        if(!isEmpty){
		                            sheetObj.count = parseInt(node.attributes.r.value);
		                            break;
		                        }
		                        node = node.previousSibling;
		                    }
		                    if(!isEmpty){
		                        let count_row = sheetObj.count;
		                        node = ws_child[i].firstChild;
		                       
		                        while(count_row > 0){
		                            sheetObj.content += helper.toText(node);
		                            node = node.nextSibling;
		                            count_row--;
		                            if(count_row == 1 && !!configs.rowStyleReq.definedInTheLastLine) {
		                            	count_row--;
		                            	if(!!configs.rowStyleReq.keepData) {
		                            		sheetObj.content += helper.toText(node);
		                            	}
		                            	else {
		                            		sheetObj.count--;
		                            	}
		                            	Object.keys(node.attributes).forEach(function(index){
				                       		if(node.attributes[index].name != 'r'){
				                       			sheetObj.attributes += node.attributes[index].name + '="' + node.attributes[index].value + '" ';
				                       		}
				                       	});
				                       
				                       	let col = node.firstChild;

				                       	while(!!col) {
				                       		sheetObj.columnStyle[getColumnNumber(col.attributes["r"].value)] = col.attributes["s"].value;
				                       		col = col.nextSibling;
				                       	}
				                       	
				                       	//sheetObj.attributes = '';
				                       	sheetObj.attributes = sheetObj.attributes.trim();
		                            }
		                        }
		                    }
		                    delete node;
		                    isBeforeSheetData = false;
		                }
		                else {
		                    if(!!isBeforeSheetData) sheetObj.start += helper.toText(ws_child[i]);
		                    else sheetObj.end += helper.toText( ws_child[i]);
		                }
		            }
		            
		            sheetObj.end += tag.end;
		            delete ws_child;
		            delete worksheet_doc;
		            delete worksheet_xml;
		            
		            return sheetObj;
		            
		        } catch(e) { // if error >> return default sheet config
		            console.error('Create excel file with default config... - Detail >>', e);
		            return initSheet(_DEFAULT_CONFIGs.xl.worksheets);
		        }
		        
		    }
		    // ---------------------------------------------- //
		    
		    function initSharedString (sharedStringEncode) {
		    	try{
		    		if(!sharedStringEncode) throw new Error('sharedStrings is Empty!');
		    		let sharedStringDocument 	= jQuery.parseXML(helper.b64_to_utf8(sharedStringEncode));
		    		let sharedStringXML 		= sharedStringDocument.firstChild;
		    		let strings 				= helper.toText(sharedStringXML);
		    		let tag 					= helper.getTextOnlyTag(sharedStringXML);

		    		var startTag = !!parseInt(sharedStringXML.attributes.count.value) ? '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' + tag.start.replace(' count="' + parseInt(sharedStringXML.attributes.count.value) + '" uniqueCount="' + parseInt(sharedStringXML.attributes.uniqueCount.value) + '">', '') : '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' + tag.start.replace(' count="' + parseInt(sharedStringXML.attributes.count.value) + '" uniqueCount="' + parseInt(sharedStringXML.attributes.uniqueCount.value) + '"/>', '');
		    		
		        	let sharedStringsRet = {
		        		count 		: parseInt(sharedStringXML.attributes.count.value),
		        		uniqueCount : parseInt(sharedStringXML.attributes.uniqueCount.value),
		        		start 		: startTag,
		        		content 	: '',
		        		end 		: tag.end,
		        		hashTable : {
		        			index : new Object(),
		        			hashCode  : []
		        		}
		        	}
                    
		        	delete strings;
		        	delete sharedStringDocument;

		        	if(!sharedStringXML.childElementCount) return sharedStringsRet;

		        	let children = sharedStringXML.firstChild;
		        	let count = 0;
		        	let hashCode = 0;
		        	let searchResult;
		        	while(!!children){
		        		hashCode = helper.hashJavaDJB2(children.firstChild.innerHTML);
		        		searchResult = helper.binary_search(hashCode, sharedStringsRet.hashTable.hashCode);
		        		//console.log(searchResult);
		        		sharedStringsRet.hashTable.hashCode.splice(searchResult.index, 0, hashCode);

		        		sharedStringsRet.hashTable.index[hashCode] = count;
		        		count++;
		        		
		        		sharedStringsRet.content += helper.toText(children);
		        		children = children.nextSibling;
		        	}

		        	return sharedStringsRet;

		    	} catch (error) {
		    		console.log(error.message);
		    		return initSharedString(_DEFAULT_CONFIGs.xl.sharedStrings);
		    	}
		        
		    }

		    function create(templateInit) {

		    	var zip = new JSZip();

		        var ContentTypes = zip.file('[Content_Types].xml', helper.b64_to_utf8(_DEFAULT_CONFIGs.ContentTypes));

		        zip.folder('_rels'		).file('.rels'		, helper.b64_to_utf8(_DEFAULT_CONFIGs._rels));
		        zip.folder('docProps'	).file('app.xml'	, helper.b64_to_utf8(_DEFAULT_CONFIGs.docProps.app));
		        zip.folder('docProps'	).file('core.xml'	, helper.b64_to_utf8(_DEFAULT_CONFIGs.docProps.core));

		        zip.folder('xl').file('sharedStrings.xml'	, templateInit.sharedStrings.start + templateInit.sharedStrings.content + templateInit.sharedStrings.end );
		        zip.folder('xl').file('styles.xml'			, helper.b64_to_utf8(configs.xlsxTemplate.styles));
		        zip.folder('xl').file('workbook.xml'		, helper.b64_to_utf8(configs.xlsxTemplate.workbook));

		        zip.folder('xl').folder('_rels'		).file('workbook.xml.rels'	, helper.b64_to_utf8(configs.xlsxTemplate._rel));
		        zip.folder('xl').folder('theme'		).file('theme1.xml'			, helper.b64_to_utf8(configs.xlsxTemplate.theme));
		        zip.folder('xl').folder('worksheets').file('sheet1.xml'			, templateInit.sheet.start + templateInit.sheet.content + templateInit.sheet.end);

		        zip.generateAsync({
		                type: "blob"
		            })
		            .then(function(content) {
		                saveAs(content, configs.fileName + ".xlsx");
		            });
		        //console.log(zip);
		    }

		    function getColumnNumber(columnName) {
		    	var index = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
		    	var columnNumber = 0;
		    	columnName = columnName.split("").reverse();
		    	columnName.shift(0, 1);
		    	columnName = columnName.join("");
		    	
	  			if(!!columnName && typeof(columnName) == "string") {
	  				for(var i = 0; i < columnName.length; i++) {
	  					if( !parseInt(columnName[i]) ) {
	  						columnNumber += (index.indexOf(columnName[i]) + 1) * Math.pow(26, i) ;
	  					}
	  				}
	  			}
	  			return columnNumber - 1;
		    }


			function CreateExportView (onCancel) {
			    
			    var xlsx_container = document.createElement('div');
			    xlsx_container.id = 'xlsx_container';
			    xlsx_container.innerHTML = '<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700" rel="stylesheet"> ';
			    
			    var xlsx_style = document.createElement('style');
			    xlsx_style.setAttribute('type', 'text/css');
			    xlsx_style.innerHTML = '@-webkit-keyframes placeHolderShimmer { 0% { background-position: -468px 0 } 100% { background-position: 468px 0 }} @keyframes placeHolderShimmer {0% { background-position: -468px 0} 100% { background-position: 468px 0}} .animated-background { -webkit-animation-duration: 1.5s; animation-duration: 1.5s; -webkit-animation-fill-mode: forwards; animation-fill-mode: forwards; -webkit-animation-iteration-count: infinite; animation-iteration-count: infinite; -webkit-animation-name: placeHolderShimmer; animation-name: placeHolderShimmer;	  -webkit-animation-timing-function: linear; animation-timing-function: linear; background: #f6f7f8; background: #eeeeee; background: -webkit-gradient(linear, left top, right top, color-stop(8%, #eeeeee), color-stop(18%, #dddddd), color-stop(33%, #eeeeee)); background: -webkit-linear-gradient(left, #e8e8e8 8%, #ffffff 18%, #e8e8e8 33%); background: linear-gradient(to right, #e8e8e8 8%, #ffffff 18%, #e8e8e8 33%); -webkit-background-size: 800px 104px; background-size: 800px 104px; position: relative; }';;
			    xlsx_style.innerHTML += '#xlsx_container {cursor: default; position: fixed; right: 10px; bottom: 10px; width: 280px; border: 1px solid #c0c0c0; box-shadow: 0 0 10px 1px #c0c0c0;} ';
			    
			    var xlsx_header = document.createElement('div');
			    
			    xlsx_header.classList = 'xlsx_header animated-background';
			    xlsx_style.innerHTML += '.xlsx_header { display : flex; justify-content: space-between; border-bottom: 1px solid #c0c0c0; height: 30px; margin: 0; color: #303030;} ';
			    
			    var xlsx_title_left = document.createElement('div');
			    xlsx_title_left.id = 'xlsx_title_left';
			    xlsx_title_left.innerHTML = '<i class="fa fa-file-excel-o fa-lg" aria-hidden="true" style="color : green"></i>';
			    
			    xlsx_style.innerHTML += '#xlsx_title_left { padding-left: 8px; margin: 4px 1px;} ';
			    
			    
			    var xlsx_title = document.createElement('p');
			    xlsx_title.id = 'xlsx_title';
			    xlsx_title.innerHTML = 'Exporting to excel file';
			    
			    xlsx_title_left.appendChild(xlsx_title);
			    
			    xlsx_style.innerHTML += '#xlsx_title {display : inline-block; font-family: Roboto Condensed; font-weight: bold; font-size: 13px; padding-left: 8px; margin: 4px 1px;} ';
			    
			    var xlsx_btn_hide = document.createElement('button');
			    xlsx_btn_hide.classList = ['fa fa-chevron-down'];
			    xlsx_btn_hide.id = 'xlsx_btn_hide';
			    
			    var flag = true;
			    xlsx_btn_hide.addEventListener('click', function () {
			        var after = document.getElementById('xlsx_process');
			        jQuery(after).slideToggle(500);
			        if(flag) {
			            jQuery('#xlsx_btn_hide').removeClass('fa-chevron-down');
			            jQuery('#xlsx_btn_hide').addClass('fa-chevron-up');
			        } else {
			            jQuery('#xlsx_btn_hide').addClass('fa-chevron-down');
			            jQuery('#xlsx_btn_hide').removeClass('fa-chevron-up');
			        }
			        flag = !flag;
			    });
			    
			    xlsx_style.innerHTML += '#xlsx_btn_hide {border-radius: 10px; background-color: transparent; border: none; font-size: 12px; padding: 4px 10px; outline: none; color: #868585; cursor: pointer;} #xlsx_btn_hide:hover { color: #505050;}';
			    
			    var xlsx_process = document.createElement('div');
			    xlsx_process.id = 'xlsx_process';
			    
			    xlsx_style.innerHTML += '#xlsx_process { background-color: #efefef; height: 70px; display: flex; align-items: center;} ';
			    
			    var xlsx_canvas = document.createElement('canvas');
			    xlsx_canvas.id = 'xlsx_canvas';
			    xlsx_canvas.setAttribute('height', '70');
			    xlsx_canvas.setAttribute('width', '70');
			    
			    xlsx_style.innerHTML += '#xlsx_canvas { background-color: #fff;} ';
			    
			    var xlsx_info = document.createElement('div');
			    xlsx_info.classList = 'xlsx_info';
			    
			    xlsx_style.innerHTML += '.xlsx_info { display: flex; flex-direction: column; justify-content: center; background-color: #fff; height: 70px; width: 210px; border-left: 1px solid #c0c0c0;}';
			    
			    var xlsx_file_name = document.createElement('div');
			    xlsx_file_name.id = 'xlsx_file_name';
			    xlsx_file_name.innerHTML = 'File name : demo export to excel.xlsx';
			    xlsx_file_name.title = xlsx_file_name.innerHTML;
			    
			    xlsx_style.innerHTML += '#xlsx_file_name { white-space: nowrap; width: 192px; overflow: hidden; text-overflow: ellipsis;  font-family: Roboto Condensed; font-size: 13px; padding-left: 6px; margin-bottom: 2px; margin-top: 4px;}';
			    
			    var xlsx_row_info = document.createElement('div');
			    xlsx_row_info.id = 'xlsx_row_info';
			    xlsx_row_info.innerHTML = 'Generating : 0 / 10000';
			    
			    xlsx_style.innerHTML += '#xlsx_row_info { white-space: nowrap; width: 192px; overflow: hidden; text-overflow: ellipsis; font-family: Roboto Condensed; font-size: 13px; padding-left: 6px;}';
			    
			    var xlsx_btn_cancel = document.createElement('button');
			    xlsx_btn_cancel.id = 'xlsx_btn_cancel';
			    xlsx_btn_cancel.innerHTML = 'Cancel';

			    xlsx_btn_cancel.addEventListener('click', function () {
			    	onCancel();
			    })
			    
			    xlsx_style.innerHTML += '#xlsx_btn_cancel { cursor: pointer; font-family: Roboto Condensed; font-size: 13px; width: 60px; text-align: center; padding: 1px; margin: auto}';
			    
			    xlsx_info.appendChild(xlsx_file_name);
			    xlsx_info.appendChild(xlsx_row_info);
			    xlsx_info.appendChild(xlsx_btn_cancel);
			    
			    
			    xlsx_process.appendChild(xlsx_canvas);
			    xlsx_process.appendChild(xlsx_info);
			    
			    xlsx_header.appendChild(xlsx_title_left);
			    xlsx_header.appendChild(xlsx_btn_hide);
			    
			    
			    xlsx_container.appendChild(xlsx_style);
			    
			    xlsx_container.appendChild(xlsx_header);
			    xlsx_container.appendChild(xlsx_process);
			    
			    // jQuery('#export').click( function () {
			    //     DrawExcelCanvas(xlsx_canvas);
			    // });
			    var ctx = xlsx_canvas.getContext('2d');
			    document.getElementsByTagName('body')[0].appendChild(xlsx_container);
			    return {
			    	xlsx_ctx : ctx,
			    	row_info : xlsx_row_info,
			    	container : xlsx_container
			    };
			}

			function DrawExcelCanvas (ctx, row_info, width, height, row, total) {

			    if(row < total ) DrawPercent(((row * 100) / total ).toFixed(1), ctx, width, height);
			    else DrawPercent( 100 , ctx, width, height);

			    row_info.innerHTML = 'Generating : ' + row + ' / ' + total;

			}

			function DrawPercent( percent, ctx, width, height ){
			    ctx.fillStyle = "#303030";
			    ctx.fillRect(0,0, width, height);

			    ctx.shadowBlur = 0;
			    ctx.font = (width * 0.21) + "px Roboto Condensed";
			    ctx.fillStyle = "#fff";
			    ctx.textAlign = "center";
			    ctx.textBaseline = 'middle';
			    ctx.fillText(percent + "%", width/2, height/2);

			    ctx.beginPath();
			    ctx.lineWidth = width * 0.05;
			    ctx.strokeStyle = '#28d1fa';
			    ctx.lineCap = 'round';
			    ctx.shadowBlur = width * 0.02;
			    ctx.shadowColor = '#28d1fa';
			    ctx.arc(width/2, height/2, (width / 2) * 0.7, -Math.PI /2, 0.02 * percent * Math.PI - Math.PI / 2);
			    ctx.stroke();
			  
			}
		})
		.catch ( function (error) {
			console.error(error);
		});

	} catch (e) {
		console.error(e);
		return null;
	}

}