export class IssModel{
    iss_position: IssPosition;
    message: string;
    timestamp: number;
    note: string;
}

interface  IssPosition
{
    latitude: number;
    longitude: number;
}