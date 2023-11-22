export enum ServerResponse {
    SUCCESS = 200,
    ERROR_SERVER = 500,
    ERROR_CLIENT = 400,
}

export type TFetchOptions = {
    url: string;
    body: string | FormData | Blob | BufferSource | URLSearchParams | null;
};

type TFetchOperations = {
    postFetch: (options: TFetchOptions) => Promise<Response | Error | void>;
};

const useFetch = (): TFetchOperations => {
    const postFetch = async (options: TFetchOptions): Promise<Response | Error | void> => {
        try {
            const { url, body } = options;

            const response = await fetch(url, {
                method: "POST",
                body: body,
            });

            return response;
        } catch (error) {
            if (error instanceof Error) {
                return error;
            }
        }
    };

    return {
        postFetch,
    };
};

export { useFetch };
