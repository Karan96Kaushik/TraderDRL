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
			"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJub25jZSI6Ik05U2JZa1dGSFc5VXY0TEVkX2hjeC0zRnNZOGRIQlJ6c1BoUEJESXY2ZGciLCJhbGciOiJSUzI1NiIsIng1dCI6IkwxS2ZLRklfam5YYndXYzIyeFp4dzFzVUhIMCIsImtpZCI6IkwxS2ZLRklfam5YYndXYzIyeFp4dzFzVUhIMCJ9.eyJhdWQiOiJodHRwczovL3ByZXNlbmNlLnRlYW1zLm1pY3Jvc29mdC5jb20vIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMTg4MjYzZDMtOWFjYi00NmY4LTgwZTAtNzhkOTc5MjgzODE3LyIsImlhdCI6MTcxMzk3NzA2MiwibmJmIjoxNzEzOTc3MDYyLCJleHAiOjE3MTQwNTgyNzAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84V0FBQUFYdHNzcUZ3Sk5SU0JIemF2RlhreUNFYWR1Kzg0…b3dlcmx0ZC5jb20iLCJ1cG4iOiJLYXJhbi5LYXVzaGlrQGZsZXhwb3dlcmx0ZC5jb20iLCJ1dGkiOiJ0QjdhN0RtbVJFZUN1OGp6aUNVZUFBIiwidmVyIjoiMS4wIiwieG1zX2NjIjpbIkNQMSJdLCJ4bXNfc3NtIjoiMSJ9.gLvKbJAlkZY54Gepx9Nd_UTNNB7NunJCXFt_I9qVubuXMNWvogt-J5C-17QsQNTi-R0qmxJUKfgFyJMIw_M54Os6Xn0AmLdlCI4vNKBgFFG5vOrp2rrHCW9_I05nzVPX1uHFYGGhxTKe6neJzQEdO8bi_I9pI6jLcR9Mf9LWnr7Af68boQx37hGsqfTiKo4UJiXUG7aiBJ9ZArgx1h5XIzMnQ8X4-5KYi-6l7snhAsUKtO6Dl3YlZH8N_jdDgZNrgRCr4oNLOHUmLSVud14XmP6WttWbc3Mi6T9ujHJrd8oKBLaa1X_XNRhWcPyWPpXNkfPRbDd1_kp5Er_9spGexQ",
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