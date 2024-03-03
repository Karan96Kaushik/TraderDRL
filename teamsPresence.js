const run = async () => {

	let presReq = await fetch("https://presence.teams.microsoft.com/v1/me/reportmyactivity/", {
		"credentials": "include",
		"headers": {
			"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:123.0) Gecko/20100101 Firefox/123.0",
			"Accept": "json",
			"Accept-Language": "en-US,en;q=0.5",
			"Content-Type": "application/json",
			"x-ms-correlation-id": "9da01245-3888-410f-82e7-844bc6929a75",
			"x-ms-endpoint-id": "d2b830d3-d20c-426c-a602-0f994b7adeb9",
			"BehaviorOverride": "redirectAs404",
			"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJub25jZSI6ImNqQ3djLW13V3Z1azlaNm5maHNLaG9mR2I2bE04NzM4ZE5GVmZVOHA0S28iLCJhbGciOiJSUzI1NiIsIng1dCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSIsImtpZCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSJ9.eyJhdWQiOiJodHRwczovL3ByZXNlbmNlLnRlYW1zLm1pY3Jvc29mdC5jb20vIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMTg4MjYzZDMtOWFjYi00NmY4LTgwZTAtNzhkOTc5MjgzODE3LyIsImlhdCI6MTcwOTExMzQwMCwibmJmIjoxNzA5MTEzNDAwLCJleHAiOjE3MDkxOTUxMjMsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84V0FBQUFyU3dldXc1NmpvdUtiemQ1cFBBc3F5RE1wbHVBbTBWM1RMcFV5YjJTMnJ2TGd4Q29jZ1puSkFtZWx0YnhHbUhDVWZaWTExRzQyK0tQaHZpSnlFbGN0OTdRVzFRMmtoVGxUdDZVNFQ0TXNzST0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiNWUzY2U2YzAtMmIxZi00Mjg1LThkNGItNzVlZTc4Nzg3MzQ2IiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJLYXVzaGlrIiwiZ2l2ZW5fbmFtZSI6IkthcmFuIiwiaXBhZGRyIjoiMmEwMTo0YjAwOjg0ZmQ6N2QwMDoyYzkzOjE3OWU6OGFjNTo5MTQ5IiwibmFtZSI6IkthcmFuIEthdXNoaWsiLCJvaWQiOiIxNjJjOTAzYy00NzFkLTQ1OTUtYjc5NS0xOGI3ZGZjMDFjMjkiLCJwdWlkIjoiMTAwMzIwMDJGNkMyQjcxMCIsInJoIjoiMC5BWGtBMDJPQ0dNdWEtRWFBNEhqWmVTZzRGeWZOY0I0SFI0bEZqc1diMGd4SEtrWU1BZG8uIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiR1ctMElCMjY1Vkt4ZmFKaUlJQ1h5NzdjeVh5c0RxcG1YQTVfTzFFaDF0TSIsInRpZCI6IjE4ODI2M2QzLTlhY2ItNDZmOC04MGUwLTc4ZDk3OTI4MzgxNyIsInVuaXF1ZV9uYW1lIjoiS2FyYW4uS2F1c2hpa0BmbGV4cG93ZXJsdGQuY29tIiwidXBuIjoiS2FyYW4uS2F1c2hpa0BmbGV4cG93ZXJsdGQuY29tIiwidXRpIjoiV1NuTjdyN3RNVTJBbE1zQmtzY0hBQSIsInZlciI6IjEuMCIsInhtc19jYyI6WyJDUDEiXSwieG1zX3NzbSI6IjEifQ.WbUcdur2XioAzaPv-ms3qfKYlRqsW42ZK3CGoWopAAWzcAp317cJDUwBSVQbuV76fC-UqEBmfOjir0kGaaMyPf3j5OSU0MxQbG5TDT0lTcyBl13KM5TjdM3c2SBeMIS_Sc16ehOsrlf7OvNFj4I1zkncTKaPAwQjru2B9RDhx8338eQdDQAkAod_KPBci1Va5dzdPK3X1R8mBvaFz5pmxl-ZENDKmzklhBoKFn46A73RQYB8E5RpJ_rn3QBPorGF2i8HsgCxzY01twS2dyEB-QU4evJlWLbK6-HZWXjH2bhKo49EEQJ-oK3j9l_N4LmTDNmdzJGP8rRmQk-4PRhdfQ",
			"x-ms-scenario-id": "369",
			"x-ms-user-type": "null",
			"x-ms-client-type": "web",
			"x-ms-client-env": "pds-prod-azsc-frce",
			"x-ms-client-version": "1415/1.0.0.2024021506",
			"x-ms-session-id": "99c80e59-8479-eddd-a9f3-1a72417fa1b3",
			"Sec-Fetch-Dest": "empty",
			"Sec-Fetch-Mode": "cors",
			"Sec-Fetch-Site": "same-site"
		},
		"referrer": "https://teams.microsoft.com/",
		"body": "{\"endpointId\":\"d2b830d3-d20c-426c-a602-0f994b7adeb9\",\"isActive\":true}",
		"method": "POST",
		"mode": "cors"
	});

	console.log(presReq.statusText)

}

run()

setInterval(run, 60*1000);