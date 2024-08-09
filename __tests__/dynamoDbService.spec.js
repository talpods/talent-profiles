import dbClient from "../config/dbClient";
import { unmarshall } from "@aws-sdk/util-dynamodb";
import DynamoDBService from "../services/dynamoDBService";

jest.mock("../config/dbClient");
jest.mock("@aws-sdk/util-dynamodb");

describe("DynamoDBService Testing cases", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getItem function tests", () => {
    it("should return unmarshalled item if found", async () => {
      const mockParams = {
        TableName: "testTable",
        Key: { pk: { S: "testPK" }, sk: { S: "testSK" } },
      };
      const mockResponse = {
        Item: {
          pk: { S: "testPK" },
          sk: { S: "testSK" },
          about: {
            M: {
              firstName: { S: "Monish" },
            },
          },
        },
      };

      const unmarshalledItem = {
        pk: "testPK",
        sk: "testSK",
        about: { firstName: "Monish" },
      };

      dbClient.send.mockResolvedValue(mockResponse);
      unmarshall.mockReturnValue(unmarshalledItem);

      const result = await DynamoDBService.getItem(mockParams);

      expect(dbClient.send).toHaveBeenCalledWith(
        expect.objectContaining({ input: mockParams })
      );
      expect(unmarshall).toHaveBeenCalledWith(mockResponse.Item);
      expect(result).toEqual(unmarshalledItem);
    });

    it("should return null if item not found", async () => {
      const mockParams = {
        TableName: "testTable",
        Key: { pk: { S: "testPK" }, sk: { S: "testSK" } },
      };
      const mockResponse = { Item: null };

      dbClient.send.mockResolvedValue(mockResponse);

      const result = await DynamoDBService.getItem(mockParams);

      expect(dbClient.send).toHaveBeenCalledWith(
        expect.objectContaining({ input: mockParams })
      );
      expect(result).toBeNull();
      expect(unmarshall).not.toHaveBeenCalled();
    });

    it("should propagate errors thrown by dbClient.send", async () => {
      const mockParams = {
        TableName: "testTable",
        Key: { pk: { S: "testPK" }, sk: { S: "testSK" } },
      };
      const errorMessage = "Something went wrong";

      dbClient.send.mockRejectedValue(new Error(errorMessage));

      await expect(DynamoDBService.getItem(mockParams)).rejects.toThrow(
        errorMessage
      );

      expect(dbClient.send).toHaveBeenCalledWith(
        expect.objectContaining({ input: mockParams })
      );
      expect(unmarshall).not.toHaveBeenCalled();
    });
  });
});
