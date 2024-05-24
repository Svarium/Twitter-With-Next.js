type BaseUser = {
	"id": string,
	"username": string,
	"name": string,	
	"photoUrl": string,
}

export type UserType = BaseUser & {    
	"bio": string,	
	"createdAt": string,
	"followersCount": number,
	"followingCount": number,
	"messageCount": number
}

export type TrendingUserType = BaseUser & {    
	"counter": number	
}