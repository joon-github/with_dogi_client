export default function Privacy() {
  return (
    <div className="rds-popup__content">
      <div className="text-xs text-gray-500 mt-4">
        [필수] 개인정보 수집 및 이용 동의
      </div>

      <table className="mt-4 term-table blue-gray-900 text-xs">
        <thead>
          <tr>
            <th className="pv10 bg-slate-300 h-10 border">항목</th>
            <th className="pv10 bg-slate-300 h-10 border">목적</th>
            <th className="pv10 bg-slate-300 h-10 border">보유 및 이용 기간</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border">
              아이디(이메일), 이름, 휴대폰번호, 비밀번호
            </td>
            <td className="p-2 border">회원 가입 및 이용자 식별, 회원관리</td>
            <td className="p-2 border">
              <span className="emphasis">회원탈퇴 시 90일간 보관 후 파기</span>
            </td>
          </tr>
          <tr>
            <td className="p-2 border">
              아이디(이메일), 이름, 휴대폰번호, 서비스 이용기록, 연령 및 성별
            </td>
            <td className="p-2 border">개인화 서비스 제공</td>
          </tr>
          <tr>
            <td className="p-2 border">
              부정행위 탐지된 아이디(이메일), 이름, 휴대폰번호, 부정행위 기록
            </td>
            <td className="p-2 border">부정행위 방지</td>
            <td className="p-2 border">
              <span className="emphasis">회원탈퇴 시 180일간 보관 후 파기</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="text-xs text-gray-500 mt-4">
        연령 및 성별 정보는 회원 가입 이후 본인 확인을 진행한 이용자에 한해
        활용됩니다.
      </div>
      <div className="text-xs text-gray-500 mt-1">
        동의를 거부할 수 있으나 동의 거부 시 서비스 이용이 제한됩니다.
      </div>
    </div>
  );
}
