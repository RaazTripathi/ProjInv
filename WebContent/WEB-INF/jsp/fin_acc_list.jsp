<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
    <head>        
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
                    <div class="page-title-text"><spring:message code="label.invoice.heading" text="Label value is missing !!!"/></div>
                </div>
            </div>	
            <div class="row">
                <div class="col-md-3">
                    <div class="catagory-main-box top-radius">
                        <div id='cssmenu'>
                        <c:if test="${ useFinanceMenus == null}">
                            <ul>
                                <li class='has-sub active'><a href='invoice_entry.html'><span><spring:message code="label.invoice.operations" text="Label value is missing !!!"/></span></a>
                                <li class=''><a href='#'><span><spring:message code="label.invoice.entry" text="Label value is missing !!!"/></span></a>
                                    <ul style='display: block;'>
                                        <li><a href='invoice_entry.html'><span><spring:message code="label.invoice.heading" text="Label value is missing !!!"/></span></a></li>
                                        <li class="active"><a href='cash_collections.html'><span><spring:message code="label.invoice.box" text="Label value is missing !!!"/></span></a></li>
                                        <li class='last'><a href='bank_collections.html'><span><spring:message code="label.invoice.bank" text="Label value is missing !!!"/></span></a></li>
                                    </ul>
                                </li>
                                
                            </ul>
                         </c:if>
                         <c:if test="${ useFinanceMenus != null}">
                         	<jsp:include page="finance_mgt_menu.jsp" />
                         </c:if>
                         </div>
                        <!-- END MUNU -->    
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="catagory-main-box top-radius">
                        <div class="cat-box-title cat-title-font top-radius">
                        	All Assets for Company 
                        </div>
                        
                        <div class="row tb-margin">
                                        <div class="col-sm-4">
                                            <a href="addfinacc.html" class="btn btn-info add-row addrow-btn-left">Add FinAccounts</a>
                                        </div>

                                    </div>
                        <div class="tab-content">
                            <div class="tab-pane active" id="demo">
                                
                                <table id="dttable" class="table table-bordered table-striped" data-filter="#filter" data-page-size="5">
                                    <thead class="orange-bg border-t">
                                        <tr>
                                            <th data-toggle="true">
                                                <spring:message code="label.asset.id" text="Label value is missing !!!"/>
                                            </th>
                                            <th data-hide="phone">
                                                <spring:message code="label.asset.name" text="Label value is missing !!!"/> 
                                            </th>
                                            
                                            <th data-hide="phone">
                                                <spring:message code="label.asset.price" text="Label value is missing !!!"/> 
                                            </th>
                                            <th data-hide="phone">
Account Type                                            </th> 
<th data-hide="phone">
Action                                            </th> 
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <c:forEach var="finacc" items="${finacc}">
                                            <tr>
                                                <td>${finacc.id}</td>
                                                <td>${finacc.name}</td>
                                               
                                                <td>${finacc.number}</td>
                                                
                                                 <td>
                                                 <c:if test="${finacc.type==1}">
                                                 Bank</c:if>
                                                 <c:if test="${finacc.type==2}">
                                                 Box</c:if>
                                                 <c:if test="${finacc.type==0}">
                                                 <b>Main Type</b></c:if>
                                                 <c:if test="${finacc.type>2}">
                                                 Sub Type</c:if>
                                                 </td>
                                                 <td>
                                                 <a href="view_vouchers.html?id=${finacc.id}"><button>View orders</button></a>
                                                 </td>
                                               
                                            </tr>  
                                            </c:forEach>
                                            
                                    </tbody>
                                    <!--<tfoot class="hide-if-no-paging">
                                        <tr>
                                            <td colspan="8">
                                                <div class="pagination pagination-centered"></div>
                                            </td>
                                        </tr>
                                    </tfoot>-->
                                </table>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
            <div class=""></div>
            <div class=""></div>
        </div>
        <!-- /container -->
        <!--Responsive Table-->
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