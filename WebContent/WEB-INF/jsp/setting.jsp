<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
    <head>        
        <jsp:include page="header.jsp" />
    </head>
            <jsp:include page="headermenu.jsp" />
    
    <body role="document">
<%--         <jsp:include page="../headermenu.jsp" />
 --%>        <div class="container">
            <div class="row container">
                <div class="dashboard_main">
                    <div class="desh-icon-bg">
                        <img src="img/i-mgmt.png">
                    </div>
                    <div class="page-title-text"><spring:message code="approve.list.header" text="Label value is missing !!!"/></div>
                </div>
            </div>	
            <div class="row">
                <div class="col-md-3">
                    <div class="catagory-main-box top-radius">

                        <!--<div class="cat-table-title"></div>-->
                        <!-- MUNU -->    
                         <div id='cssmenu'>
                            <ul>
                                                                 <li class='last'>&nbsp;</li>
                            
                                     <li class='last'><a href='account.html'><span>Add User</span></a></li>
                            </ul>
                        </div> 
                        <!-- END MUNU -->    
                    </div>
                </div>
                
                
                <div class="col-md-9">
                        <div class="catagory-main-box top-radius">
                            <div class="cat-box-title cat-title-font top-radius">Setting</div>

                            <div class="row tb-margin">
                                <div class="col-sm-2"></div>
                            <form action="updateuser.htm" method="post"  acceptcharset="UTF-8">
                               <%--  <form:hidden path="id" />
                                <form:errors path="*" cssClass="errorblock" element="div" />
 --%>
                                <div class="col-sm-8 visible-lg visible-md visible-sm">

                                   

                                    <div class="form-group">
                                        <label class="col-sm-4 col-xs-12 control-label search-text"> Category:</label>
                                        <div class="col-sm-8 col-xs-12">
                                            <select class="form-control" name="id">
                                                <c:forEach items="${ulist}" var="itemtypeid">
                                                    <option value="${itemtypeid.id}"><c:out value="${itemtypeid.name}" /></option>
                                                </c:forEach>
                                            </select>                                       
                                        </div>
                                    </div>

                                    

                                    <div class="form-group">
                                        <label class="col-sm-4 col-xs-12 control-label search-text"> Category:</label>
                                        <div class="col-sm-8 col-xs-12">
                                            <select class="form-control" name="role">
                                                
                                                    <option value="USER_INVENTORY">USER_INVENTORY</option>
                                                
                                                    <option value="USER_HR">USER_HR</option>
                                                
                                                    <option value="USER_FIN">USER_FIN</option>
                                                    <option value="USER_CASHIER">USER_CASHIER</option>
                                                    <option value="USER_PURCHASE">USER_PURCHASE</option>
                                                    <option value="USER_APPROVE">USER_APPROVE</option>
                                                    <option value="USER_CASHIER">USER_CASHIER</option>
                                                
                                            </select>                                       
                                        </div>
                                    </div>

                                   
                                    
                                    
                                    <div class="row text-pad-top visible-lg visible-md visible-sm">
                                        <div class="div-center">
                                            <input type="submit" class="btn btn-orange"  onclick="return submitDetailsForm();" value="Save" />
                                            <button type="button" class="btn btn-orange" onclick="javascript:history.back();">Cancel</button>
                                        </div>
                                    </div>                                   
                                </div>
                            </form>
                                                      
                            <div class="col-sm-2"></div>
                        </div>                        
                    </div>
                </div>
                
                
                
                
                
                
                
            </div>
            <div class=""></div>
            <div class=""></div>
        </div>
        <!-- /container -->
        <!--Responsive Table-->
        <script type="text/javascript">
        </script>
        <!-- Bootstrap core JavaScript
        ================================================== -->
        <!-- Placed at the end of the document so the pages load faster -->
        <script src="js/bootstrap.min.js"></script>
        <script src="js/jquery.dataTables.min.js"></script>
        <script src="js/dataTables.responsive.min.js"></script>
        <script src="js/ajax-bootstrap3.js"></script>
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
    </body>
</html>