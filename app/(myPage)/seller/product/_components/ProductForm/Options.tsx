"use client";
import { AlertStatus } from "@/app/_components/block/Alert";
import FormComponents from "@/app/_components/block/Form";
import ImageUpload from "@/app/_components/block/ImageUpload";
import useAlert from "@/app/_hooks/useAlert";
import { required } from "@/app/_utils/validations";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

interface StringMap {
  [key: string]: string;
}

export default function Options() {
  const { alert } = useAlert();
  const [addOption, setAddOption] = useState<StringMap[]>([{}]);
  const [optionImages, setOptionImages] = useState<StringMap>({});
  const onClickAddOption = () => {
    setAddOption([...addOption, {}]);
  };
  const onClickRemoveOption = (index: number) => {
    if (index === 0) {
      alert("옵션을 모두 삭제할 수 없습니다.", AlertStatus.Error);
      return;
    }
    const newOption = [...addOption];
    newOption.splice(index, 1);
    setAddOption(newOption);
  };
  return (
    <div>
      <div id="productOption" className="flex-1 p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">옵션 정보</h3>
          <button
            type="button"
            className="w-fit h-12 border rounded-md bg-green-100 px-4"
            onClick={onClickAddOption}
          >
            <div className="flex items-center justify-center gap-2">
              <FaPlusCircle size={20} />
              <span>옵션 추가</span>
            </div>
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {addOption.map((item, index) => {
            return (
              <div key={index} className="flex gap-4">
                <FormComponents.Item
                  label="옵션 이름"
                  fieldKey={`option-name-${index}`}
                  validation={required("옵션 이름을 입력해 주세요.")}
                >
                  <FormComponents.Input maxLength={100} />
                </FormComponents.Item>
                <FormComponents.Item
                  label="옵션 금액"
                  fieldKey={`option-addPrice-${index}`}
                  validation={required("옵션 금액을 입력해 주세요.")}
                >
                  <FormComponents.Input type="number" maxLength={100} />
                </FormComponents.Item>
                <FormComponents.Item
                  label="옵션 수량"
                  fieldKey={`option-stock-${index}`}
                  validation={required("옵션 수량을 입력해 주세요.")}
                >
                  <FormComponents.Input type="number" maxLength={100} />
                </FormComponents.Item>
                <FormComponents.Item
                  label="옵션 이미지"
                  fieldKey={`option-image-${index}`}
                  value={optionImages[index]}
                >
                  <FormComponents.Input className="hidden" />
                  <ImageUpload
                    setImages={(image: any) => {
                      setOptionImages((prev: any) => {
                        return { ...prev, [index]: image };
                      });
                    }}
                  />
                </FormComponents.Item>
                <div className="flex">
                  <Button
                    type="button"
                    onClick={() => onClickRemoveOption(index)}
                  >
                    <div className="flex h-[38px] items-center justify-center">
                      <FaMinusCircle size={24} />
                    </div>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
