//react//
import { MouseEvent } from "react";

//components//
import { ButtonGroup, Button } from "@mui/material";

//types//
import { TGeoTaskType } from "store/editorGeoTask";

type TSelectTaskTypeProps = {
    geoTaskType: TGeoTaskType;
    onClickSelectGeoTaskType: (e: MouseEvent<HTMLButtonElement>) => void;
};

const SelectTaskType = (props: TSelectTaskTypeProps) => {
    const { geoTaskType, onClickSelectGeoTaskType } = props;

    return (
        <ButtonGroup>
            <Button
                size="small"
                variant={geoTaskType === "replace-geo" ? "contained" : "outlined"}
                aria-label="replace-geo"
                onClick={onClickSelectGeoTaskType}
            >
                Изменить гео
            </Button>
            <Button
                size="small"
                variant={geoTaskType === "add-geo" ? "contained" : "outlined"}
                aria-label="add-geo"
                onClick={onClickSelectGeoTaskType}
            >
                Добавить гео
            </Button>
        </ButtonGroup>
    );
};

export { SelectTaskType };
