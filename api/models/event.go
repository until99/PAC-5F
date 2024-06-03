package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)



type Event struct {
	ID               primitive.ObjectID `bson:"_id,omitempty" json:"id,omitempty"`
	Title            string             `json:"title" bson:"title"`
	Subtitle         string             `json:"subtitle" bson:"subtitle"`
	Reward           float64            `json:"reward" bson:"reward"`
	CoverImage       string             `json:"cover_image" bson:"cover_image"`
	StartedDate      string             `json:"started_date" bson:"started_date"`
	FinishDate       string             `json:"finish_date" bson:"finish_date"`
	SectionsTitle    string             `json:"sections_title" bson:"sections_title"`
	SectionsContent  string             `json:"sections_content" bson:"sections_content"`
	RegisteredAmount int                `json:"registered_amount" bson:"registered_amount"`
}
