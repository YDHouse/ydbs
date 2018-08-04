<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  
    <title>간편장부</title>
  
    <!-- 합쳐지고 최소화된 최신 CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
    <!-- 부가적인 테마 -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
  </head>
  
  <body>
    <!-- jQuery (부트스트랩의 자바스크립트 플러그인을 위해 필요합니다) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <!-- 합쳐지고 최소화된 최신 자바스크립트 -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>

    <ul class="nav nav-pills">
      <li role="presentation"><a href="/">HOME</a></li>
      <li role="presentation" class="active"><a href="/books">장부기입</a></li>
      <li role="presentation"><a href="#">장부분석</a></li>
      <li role="presentation"><a href="#">감가상각</a></li>
      <li role="presentation"><a href="#">거래처</a></li>
      <li role="presentation"><a href="#">명세서</a></li>
      <li role="presentation"><a href="#">계산서</a></li>
    </ul>

    <h3></h3>

    <div class="btn-group"><input type="date" id="dateStart" class="form-control"></div>
    <div class="btn-group"><input type="date" id="dateEnd" class="form-control"></div>
    <div class="btn-group"></div><button type="button" class="btn btn-link" id="btnBooksSearch" aria-expanded="false">조회</button></div>
    <div class="btn-group"><a href="/booksInsert"><button type="button" class="btn btn-link" id="btnBooksInsert" aria-expanded="false">장부입력</button></a></div>

    <h3></h3>

    <table class="table table-condensed">
      <tr>
        <th>날짜</th>
        <th>거래구분</th>
        <th>거래내용</th>
        <th>거래처</th>
        <th>수입금액</th>
        <th>수입VAT</th>
        <th>비용금액</th>
        <th>비용VAT</th>
        <th>고정자산비용</th>
        <th>고정자산VAT</th>
        <th>비고</th>
      </tr>
      <%
      for(var i = 0; i<booksList.length; i++)
      {
      %>
      <tr>
        <td><%=booksList[i].bdate%></td>
        <td><%=booksList[i].booksclassfication%></td>
        <td><%=booksList[i].booksdetails%></td>
        <td><%=booksList[i].booksclient%></td>
        <td><%=booksList[i].booksincome%></td>
        <td><%=booksList[i].booksincomevat%></td>
        <td><%=booksList[i].booksexpense%></td>
        <td><%=booksList[i].booksexpensevat%></td>
        <td><%=booksList[i].booksasset%></td>
        <td><%=booksList[i].booksassetvat%></td>
        <td><%=booksList[i].booksremarks%></td>
      </tr>
      <%
      }
      %>

    </table>

    <script>
      //달력에 오늘 날짜 입력
      document.getElementById('dateStart').valueAsDate = new Date();
      document.getElementById('dateEnd').valueAsDate = new Date();

      //조회 버튼 클릭 이벤트
      $("#btnBooksSearch").click(function() {
        //달력 텍스트박스의 값을 가져온다.
        var dateStart = $("#dateStart").val();
        var dateEnd = $("#dateEnd").val();
        //쿼리를 돌리기 위해 해당 값을 보낸다.
        location.href = "/booksSearch/" + dateStart + "/" + dateEnd;
      });
      
      //장부입력 버튼 클릭 이벤트
      $("#btnBooksInsert").click(function() {
        console.log("버튼2");
      });
    </script>

  </body>
</html>