import Button from "../Button";
import React from "react";

export interface BottomSheetProps extends React.HTMLAttributes<HTMLDivElement> {
    open: boolean;
    onClose: () => void;
    title: string;
    buttonText: string;
}

const BottomSheet = ({ open, onClose, title, buttonText, children }: BottomSheetProps) => {

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-10 flex items-end">
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
            <div className="w-full bg-white rounded-t-3xl  border-gray-300 z-20 animate-slide-up">
                <div className={"border-b-[1px] border-b-gray-500 flex flex-col items-center pt-2 pb-3"} onClick={onClose}>
                    <div className="w-[44px] h-[4px] bg-gray-300 rounded" />
                    <p className="mt-6 text-center text-h6 mb-[13px]">{title}</p>
                </div>
                <div className="h-[566px] overflow-y-scroll px-4">
                    {children}
                </div>
                <div className="bg-white border-t-[1px] border-gray-500 flex justify-between items-center p-4">
                    <Button text={buttonText} onClick={onClose} />
                </div>
            </div>
        </div>
    );
}

export default BottomSheet;
