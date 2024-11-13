import Button from "../Button";
import React from "react";

export interface BottomSheetProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    buttonText: string;
    showCancelButton?: boolean;
}

const BottomSheet = ({title, buttonText, children, showCancelButton}: BottomSheetProps) => {
    return (
        <div className={'w-[430px] h-[838px] bg-black/50 rounded-t-3xl flex flex-col justify-end'}>
            <div className='w-[430px] bg-white rounded-t-3xl border'>
                <div className='justify-items-center mt-2 border-b-[0.75px] border-gray-300'>
                    <div className='w-[44px] h-[4px] bg-gray-300 rounded'></div>
                    <p className={'mt-6 text-h6 mb-[13px]'}>{title}</p>
                </div>
                <div className='h-[410px] overflow-y-scroll'>
                    {children}
                </div>
                {showCancelButton ?
                    (
                        <div className='bg-white border-t-[0.75px] border-gray-300 p-4 flex flex-row justify-between items-center'>
                            <div className='text-h6'>Cancelar</div>
                            <div className={'w-[109px]'}>
                                <Button text={buttonText}/>
                            </div>
                        </div>
                    ) :
                    (
                        <div className='bg-white border-t-[0.75px] border-gray-300 p-4'>
                            <Button text={buttonText}/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default BottomSheet;