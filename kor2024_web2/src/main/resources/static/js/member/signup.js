// JS자동완성 : 1. VSCODE 2. 플러그인 : tabnine

// [1] 회원가입 함수
const onSignUp = ( ) => { console.log('함수 실행됨.');
    // (1) INPUT DOM 가져온다.
    let midInput = document.querySelector('.midInput');     console.log( midInput )
    let mpwdInput = document.querySelector('.mpwdInput');   console.log( mpwdInput )
    let mpwdCheckInput = document.querySelector('.mpwdCheckInput'); console.log( mpwdCheckInput )
    let mnameInput = document.querySelector('.mnameInput'); console.log( mnameInput )
    let memailInput = document.querySelector('.memailInput'); console.log( memailInput )
    // (2) DOM의 value(입력받은값) 반환 받는다.
    let mid = midInput.value;               console.log( mid )
    let mpwd = mpwdInput.value;             console.log( mpwd )
    let mpwdCheck = mpwdCheckInput.value;   console.log( mpwdCheck )
    let mname = mnameInput.value;           console.log( mname )
    let memail = memailInput.value;         console.log( memail )
    // (!!!생략) 다양한 유효성검사 코드 생략 .
    // (3) 입력받은 값들을 서버에게 보낼 객체 만들기
    let dataObj = { mid : mid , mpwd : mpwd , mname : mname , memail : memail }; console.log( dataObj );
    // (4) fetch 옵션 
    const option = {   
        method : 'POST' , //http 통신 요청 보낼 떄 header body(본문) 타입 설정
         headers : { 'Content-Type' : 'application/json'} ,  //http 통신 요청 보낼 때 body(본문) 자료 대입하는데
         body : JSON.stringify( dataObj )  //JSON.stringify : 객체타입-> 문자열 변환 , http는 문자열 타입만 전송이 가능하다.
    }
    // (5) fetch 통신 
    fetch( '/member/signup.do' , option ) //fetch(`통신할url`, 옵션)
        .then( response => response.json() ) //fetch()
        .then( data => { 
            // (6) fetch 응답 에 따른 화면 구현 
            if( data == true ){ alert('가입등록 완료'); location.href="/member/login"; } //만일 응답 자료가 true이면 성공 안내, 로그인 페이지로 이동
            else{  alert('가입실패 : 입력하신 정보가 올바르지 않습니다.') }
        })
        .catch( error => { alert('가입오류 : 관리자에게 문의'); } )
}