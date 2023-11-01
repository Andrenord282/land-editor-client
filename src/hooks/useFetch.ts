enum ServerResponse {
    SUCCESS = 200,
    ERROR_SERVER = 500,
    ERROR_CLIENT = 400,
}

export type TFetchOptions = {
    url: string;
    body: string | FormData | Blob | BufferSource | URLSearchParams;
};

type TFetchOperations = {
    postFetch: (options: TFetchOptions) => Promise<void>;
};

const useFetch = (): TFetchOperations => {
    const postFetch = async (options: TFetchOptions) => {
        try {
            const { url, body } = options;

            const response = await fetch(url, {
                method: "POST",
                body: body,
            });

            if (response.status === ServerResponse.SUCCESS) {
                console.log(123);
            }
        } catch (error) {}
    };

    return {
        postFetch,
    };
};

export { useFetch };
