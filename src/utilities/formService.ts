export type TFormDataList = {
    [key: string]: any;
};

class FormService {
    formData: FormData;
    fileList: File[];

    constructor() {
        this.formData = new FormData();
        this.fileList = [];
    }

    pushFile = (file: File) => {
        this.fileList.push(file);
    };

    resetFileList = () => {
        this.fileList = [];
    };

    collectData = (data: TFormDataList) => {
        const dataJSON = JSON.stringify(data);
        this.formData.append("data", dataJSON);
        this.formData.append("land", this.fileList[0]);
    };
}

const formService = new FormService();

export { formService };
