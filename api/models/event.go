package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Section struct {
	Title   string `bson:"title" json:"title"`
	Content string `bson:"content" json:"content"`
}

type Event struct {
	ID               primitive.ObjectID `bson:"_id,omitempty" json:"id,omitempty"`
	Title            string             `bson:"title" json:"title"`
	Subtitle         string             `bson:"subtitle" json:"subtitle"`
	Reward           float64            `bson:"reward" json:"reward"`
	CoverImage       string             `bson:"cover_image" json:"cover_image"`
	StartedDate      string             `bson:"started_date" json:"started_date"`
	FinishDate       string             `bson:"finish_date" json:"finish_date"`
	Sections         []Section          `bson:"sections" json:"sections"`
	RegisteredAmount int                `bson:"registered_amount" json:"registered_amount"`
}
