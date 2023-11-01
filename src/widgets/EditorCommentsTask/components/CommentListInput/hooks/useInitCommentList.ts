// redux //
import { useDispatch, useSelector } from "react-redux";

// actions //
import { editorCommentsTaskActions } from "store/editorCommentsTask";

// selectors //
import { selectLandAddress, selectImgFolderName } from "store/editorTextTask";

// types //
import { PayloadCommentList } from "store/editorCommentsTask";

type TInitCommentListHookReturn = {
    initCommentList: (
        dom: Document,
        selectors: { avaSelector: string; nameSelector: string; commentSelector: string }
    ) => void;
};

const useInitCommentList = (): TInitCommentListHookReturn => {
    const dispatch = useDispatch();
    const landAddress = useSelector(selectLandAddress);
    const imgFolderName = useSelector(selectImgFolderName);

    const isNameRepeated = () => {
        const nameList: string[] = [];

        return (name: string | null): number => {
            if (name) {
                const nameExists = nameList.indexOf(name);
                nameList.push(name);
                return nameExists;
            } else {
                return -1;
            }
        };
    };

    const addNoteElement = (currentIndex: number, nameExists: number, comment: Element) => {
        const noteElement = document.createElement("span");
        noteElement.style.display = "block";
        noteElement.style.color = "red";
        noteElement.style.fontWeight = "700";
        noteElement.textContent = `Комментария повторяется: -${currentIndex - nameExists}`;
        comment.prepend(noteElement);
    };

    const replaceImgSrc = (newSrc: string, imgFolderName: string, commentAva: HTMLImageElement) => {
        const oldSrc = new RegExp(`^http.+${imgFolderName}`);
        commentAva.src = commentAva.src.replace(oldSrc, `${newSrc}${imgFolderName}`);
    };

    const initCommentList = (
        dom: Document,
        selectors: { avaSelector: string; nameSelector: string; commentSelector: string }
    ) => {
        const { avaSelector, nameSelector, commentSelector } = selectors;
        const commentListStrings: string[] = [];
        const commentListNodes = dom.querySelectorAll(commentSelector);
        const checkName = isNameRepeated();

        commentListNodes.forEach((comment, index) => {
            const commentAva = comment.querySelector(avaSelector) as HTMLImageElement;
            const commentName = comment.querySelector(nameSelector) as HTMLElement;

            if (commentAva !== null) {
                replaceImgSrc(landAddress, imgFolderName, commentAva);
            }

            if (commentName !== null) {
                const nameExists = checkName(commentName.textContent);
                if (nameExists !== -1) {
                    addNoteElement(index, nameExists, comment);
                }
            }

            commentListStrings.push(comment.outerHTML);
        });

        const data: PayloadCommentList = {
            commentList: commentListStrings,
        };

        dispatch(editorCommentsTaskActions.writeCommentList(data));
    };

    return {
        initCommentList,
    };
};

export { useInitCommentList };
