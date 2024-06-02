package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type User struct {
	ID              primitive.ObjectID `bson:"_id,omitempty" json:"id,omitempty"`
	FirstName       string             `json:"first_name" bson:"first_name"`
	LastName        string             `json:"last_name" bson:"last_name"`
	Email           string             `json:"email" bson:"email"`
	Password        string             `json:"password" bson:"password"`
	ProfileURLImage string             `json:"profile_url_image" bson:"profile_url_image"`
}
