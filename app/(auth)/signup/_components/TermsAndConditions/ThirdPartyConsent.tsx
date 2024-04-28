export default function ThirdPartyConsent() {
  return (
    <div className="rds-popup__content">
      <div className="mb-4 blue-gray-800">[필수] 개인정보 제 3자 제공 동의</div>

      <table className="mt10 term-table blue-gray-900 t5">
        <thead>
          <tr>
            <th className="py-2 border whitespace-nowrap">
              개인정보
              <br />
              제공 받는 자
            </th>
            <th className="py-2 border">
              개인정보
              <br />
              제공 항목
            </th>
            <th className="py-2 border">
              개인정보
              <br />
              제공 목적
            </th>
            <th className="py-2 border">
              개인정보
              <br />
              이용 기간
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">
              <b>with dogi</b>
            </td>
            <td className="px-4 py-2 border">with dogi 아이디</td>
            <td className="px-4 py-2 border">
              <b>with dogi 서비스 제공</b>
            </td>
            <td className="px-4 py-2 border">
              <b>전자상거래법에 의해 5년간 보관 후 파기</b>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mt-4 text-xs text-gray-500 ">
        제공에 동의하지 않을 수 있으나, 동의하지 않으면 회원 가입에 제한이
        됩니다.
      </div>
    </div>
  );
}
