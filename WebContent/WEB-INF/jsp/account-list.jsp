<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
    <head>
        <%--<%@include file="header.jsp" %>--%>
        <jsp:include page="header.jsp" />
    </head>
    <body role="document">
        <jsp:include page="headermenu.jsp" />
        <div class="container">
            <div class="row container">
                <div class="dashboard_main">
                    <div class="desh-icon-bg">
                        <img src="img/i-mgmt.png">
                    </div>
                    <div class="page-title-text"><spring:message code="account.accountlist" text="Label value is missing !!!"/></div>
                </div>
            </div>	
            <div class="row">
                <div class="col-md-3">
                    <div class="catagory-main-box top-radius">
                        <!--<div class="cat-table-title"></div>-->
                        <!-- MUNU -->    
                                               <!-- END MUNU -->    

                    </div>
                </div>
                <div class="col-md-9">
                    
                      <div id="login" class=" col-md-6 row text-pad-top visible-lg visible-md visible-sm">
            <h1 id="login_title">     Add new account     
</h1>
                    <form action="register/registerAction.htm" commandName="user" id="login_form" method="post">
               
               
                <div class="field_container">
                 <input type="text" placeholder="User Name"  name="name" class="login-inp form-control" />
                </div>
                
                <div class="field_container">
                  <input type="Password" placeholder="Password" name="password" class="login-inp form-control" />
                    
                </div>
            
            
              <div class="field_container">
                    <input type="Password" placeholder="Retype Password" name="rpassword" class="login-inp form-control" />
                    
                </div>
            
            
                
            <button id="sign_in_button">
                        <input type="submit" class="btn btn-info add-row " value="Register"> 
                    </button>
            
            <form> 
                    </div>
                    
                    
                                    </div>
            </div>
        </div>
        <!-- /container -->
        <!--Responsive Table-->
        <script type="text/javascript">
            $(document).ready(function() {
                var table = $('#dttable').DataTable();
                $('.row-delete').click(function(eve) {
                    var row = this;
                    eve.preventDefault();
                    $.ajax({
                        url: $(row).attr('href')
                        , success: function(response) {
                            if (response === true) {
                                table.row($(row).closest('tr')).remove().draw(false);
                            }
                        }
                    });
                    return false;
                });
            });
        </script>
        <!-- Bootstrap core JavaScript
        ================================================== -->
        <!-- Placed at the end of the document so the pages load faster -->
        <script src="js/bootstrap.min.js"></script>
        <script src="js/jquery.dataTables.min.js"></script>
        <script src="js/dataTables.responsive.min.js"></script>        
        <script src="js/docs.min.js"></script>        
    </body>
</html>