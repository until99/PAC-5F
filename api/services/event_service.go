// event_services.go
package services

import (
	"context"
	"errors"

	"github.com/until99/PAC-5F/config"
	"github.com/until99/PAC-5F/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

var (
	ErrEventNotFound = errors.New("event not found")
)

func CreateEvent(ctx context.Context, event models.Event) (primitive.ObjectID, error) {
	collection := config.GetCollection("TB_EVENTS")
	result, err := collection.InsertOne(ctx, event)
	if err != nil {
		return primitive.NilObjectID, err
	}
	return result.InsertedID.(primitive.ObjectID), nil
}

func GetEvents(ctx context.Context) ([]models.Event, error) {
	collection := config.GetCollection("TB_EVENTS")
	cursor, err := collection.Find(ctx, bson.M{})
	if err != nil {
		return nil, err
	}
	defer cursor.Close(ctx)

	var events []models.Event
	for cursor.Next(ctx) {
		var event models.Event
		if err := cursor.Decode(&event); err != nil {
			return nil, err
		}
		events = append(events, event)
	}

	if err := cursor.Err(); err != nil {
		return nil, err
	}

	return events, nil
}

func GetEventByID(ctx context.Context, id primitive.ObjectID) (models.Event, error) {
	collection := config.GetCollection("TB_EVENTS")
	var event models.Event
	err := collection.FindOne(ctx, bson.M{"_id": id}).Decode(&event)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			return event, ErrEventNotFound
		}
		return event, err
	}
	return event, nil
}

func UpdateEvent(ctx context.Context, id primitive.ObjectID, event models.Event) error {
	collection := config.GetCollection("TB_EVENTS")
	result, err := collection.UpdateOne(ctx, bson.M{"_id": id}, bson.M{"$set": event})
	if err != nil {
		return err
	}
	if result.ModifiedCount == 0 {
		return ErrEventNotFound
	}
	return nil
}

func DeleteEvent(ctx context.Context, id primitive.ObjectID) error {
	collection := config.GetCollection("TB_EVENTS")
	result, err := collection.DeleteOne(ctx, bson.M{"_id": id})
	if err != nil {
		return err
	}
	if result.DeletedCount == 0 {
		return ErrEventNotFound
	}
	return nil
}
