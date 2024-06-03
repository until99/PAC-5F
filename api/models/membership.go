package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Membership struct {
	ID          primitive.ObjectID `json:"id" bson:"_id,omitempty"`
	IsOrganizer bool               `json:"is_organizer" bson:"is_organizer"`
	EventID     primitive.ObjectID `json:"id_events" bson:"id_events"`
	UserID      primitive.ObjectID `json:"id_users" bson:"id_users"`
}
