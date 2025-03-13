
export interface UserModel {
    userId: number;
    id:     number;
    title:  string;
    body:   string;
}

export class Convert {
    public static toUserModel(json: string): UserModel {
        return JSON.parse(json);
    }

    public static userModelToJson(value: UserModel): string {
        return JSON.stringify(value);
    }
}
