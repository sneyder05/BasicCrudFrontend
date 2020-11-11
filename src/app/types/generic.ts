export declare type Any = any;

export declare type SimpleRequestMsgResponse = {
    success: boolean,
    message: string
}

export declare type RequestMsgResponse<T> = {
    success: boolean,
    message: string,
    data?: T
};

export declare type RequestErrorResponse = {
    success: boolean,
    message: string,
    data?: Any
}