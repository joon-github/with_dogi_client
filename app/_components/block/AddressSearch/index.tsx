import Script from "next/script";
import { useCallback } from "react";

interface Address {
  address: string;
  zonecode: string;
}
interface Props {
  setAddress: (address: Address) => void;
}
export default function AddressSearch({ setAddress }: Props) {
  const handleAddressSearch = useCallback(() => {
    new window.daum.Postcode({
      oncomplete: function (data: Address) {
        setAddress(data);
      },
    }).open();
  }, []);
  return (
    <div>
      <Script
        src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
        strategy="afterInteractive"
      />
      <button
        type="button"
        onClick={handleAddressSearch}
        className="whitespace-nowrap p-4"
      >
        우편번호 검색
      </button>
    </div>
  );
}
