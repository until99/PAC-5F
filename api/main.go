package main

import (
	"context"
	"fmt"
	"log"
	"os"
	"time"

	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

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
	StartedDate      time.Time          `bson:"started_date" json:"started_date"`
	FinishDate       time.Time          `bson:"finish_date" json:"finish_date"`
	Sections         []Section          `bson:"sections" json:"sections"`
	RegisteredAmount int                `bson:"registered_amount" json:"registered_amount"`
}

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatalf("Error loading .env file: %v", err)
	}

	clientOptions := options.Client().ApplyURI(os.Getenv("MONGO_URI"))
	client, err := mongo.Connect(context.TODO(), clientOptions)
	if err != nil {
		log.Fatalf("Failed to connect to MongoDB: %v", err)
	}
	defer client.Disconnect(context.TODO())

	eventCollection := client.Database(os.Getenv("MONGO_DB")).Collection("events")

	var event Event
	err = eventCollection.FindOne(context.Background(), bson.M{"title": "Aerified"}).Decode(&event)
	if err != nil {
		log.Fatalf("Error finding event in %v", err)
	}

	fmt.Printf("%+v\n", event)
}
