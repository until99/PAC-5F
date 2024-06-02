package services

import (
	"context"

	"github.com/until99/PAC-5F/config"
	"github.com/until99/PAC-5F/models"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

func CreateEvent(ctx context.Context, event models.Event) (primitive.ObjectID, error) {
	collection := config.GetCollection("events")
	result, err := collection.InsertOne(ctx, event)
	if err != nil {
		return primitive.NilObjectID, err
	}
	return result.InsertedID.(primitive.ObjectID), nil
}

func GetEvents(ctx context.Context) ([]models.Event, error) {
	collection := config.GetCollection("events")
	cursor, err := collection.Find(ctx, bson.M{})
	if err != nil {
		return nil, err
	}
	defer cursor.Close(ctx)
	var events []models.Event
	if err = cursor.All(ctx, &events); err != nil {
		return nil, err
	}
	return events, nil
}

func GetEventByID(ctx context.Context, id primitive.ObjectID) (models.Event, error) {
	collection := config.GetCollection("events")
	var event models.Event
	err := collection.FindOne(ctx, bson.M{"_id": id}).Decode(&event)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			return event, nil
		}
		return event, err
	}
	return event, nil
}

func UpdateEvent(ctx context.Context, id primitive.ObjectID, event models.Event) error {
	collection := config.GetCollection("events")
	_, err := collection.UpdateOne(ctx, bson.M{"_id": id}, bson.M{"$set": event})
	return err
}

func DeleteEvent(ctx context.Context, id primitive.ObjectID) error {
	collection := config.GetCollection("events")
	_, err := collection.DeleteOne(ctx, bson.M{"_id": id})
	return err
}
