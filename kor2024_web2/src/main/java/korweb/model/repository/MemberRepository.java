package korweb.model.repository;

import korweb.model.entity.MemberEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<MemberEntity, Integer> {
    //인터페이스 추상메소드를 가질수 있는 타입
    //DAO 특정 값 조회 : select * from member where mid= ?
    //JPA 특정 값 조회 : 반환엔티티 findBy필드명(타임 조건값)
        //1. 필드명을 이용한 엔티티 검색 : 반환엔티티 findBy필드명(타입 매개변수명);
        //2. 필드명을 이용한 엔티티 존재여부 : boolean sxistsBy 필드명(타입 매개변수명);
//        * 2개 이상의 필드명을 넣을 경우 카멜표기법
//
//    예1 ) 아이디 중복 검사
//        DAO : select * from member where mid=?
//        JPA : boolean existsByMid(String mid)
//
//    예2 ) 로그인, 아이디와 비밀번호 일치 여부 검사
//        DAO : select * from member where  mid=? and mpwd =?
//        JPA : boolean existByMidAndMpwd(String mid, String mpwd)
//
//    예3 ) 아이디 또는 이메일 중복 일치 여부 검사
//        DAO : select * from member where  mid=? and mpwd =?
//        JPA : boolean existByMidorMemail(String mid, String memail)
//
//    예3 ) 아이디로 엔티티 검색
//        DAO : select * from member where  mid=?
//        JPA : MemberEntity findByMid(String mid)

    //로그인 추상 메소드 : existsBy필드명And필드명
    boolean existsByMidAndMpwd(String mid, String mpwd);


}
