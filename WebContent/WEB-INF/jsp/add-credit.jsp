<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
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
                    <div class="page-title-text"><spring:message code="label.journal.heading" text="Label value is missing !!!"/></div>
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
                        <c:if test="${ flash != null}">
	                        <div class="cat-box-title cat-title-font top-radius">${flash}</div>
	                    </c:if>
	                    <div class="tab-content">
                            <div class="tab-pane active" id="demo">
                            <form:form action="addCredit.html" method="post" modelAttribute="journal">
                                <!--  <form:errors path="*" cssClass="errorblock" element="div" /> -->
                                <form:hidden path="id" />
                                 <form:hidden path="type" value="CREDIT" />
                                <form:hidden path="io" value="${type}" />
                                <!--div class="col-sm-8 visible-xs"-->
                                
                                    <div class="form-group">
                                        <label class="col-sm-4 col-xs-12 control-label search-text visible-lg visible-md visible-sm">
                                            <spring:message code="label.journal.date" text="Default Text"/>
                                        </label>
                                        <div class="col-sm-8 col-xs-12">                                            
                                            <form:input id="datepicker" type="text" class="form-control" path="date" />
                                            <form:errors path="date" cssClass="error" />
                                        </div>
                                    </div>
                                    <div class="form-group">
	                                    <label class="col-sm-4 col-xs-12 control-label search-text visible-lg visible-md visible-sm">
	                                      <spring:message code="label.journal.no" text="Default Text"/>
	                                    </label>
                                        <div class="col-sm-8 col-xs-12">
                                            <form:input  type="text" class="form-control" path="journalNo" placeholder="Number."/>
                                            <form:errors path="journalNo" cssClass="error" />
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
	                                    <label class="col-sm-4 col-xs-12 control-label search-text visible-lg visible-md visible-sm">
	                                      <spring:message code="label.journal.price" text="Default Text"/>
	                                    </label>
                                        <div class="col-sm-8 col-xs-12">
                                            <form:input  type="text" class="form-control" path="price" placeholder="Price"/>
                                            <form:errors path="price" cssClass="error" />
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
	                                    <label class="col-sm-4 col-xs-12 control-label search-text visible-lg visible-md visible-sm">
	                                      <spring:message code="label.journal.remark" text="Default Text"/>
	                                    </label>
                                        <div class="col-sm-8 col-xs-12">
                                            <form:input  type="text" class="form-control" path="remark" placeholder="Text"/>
                                            <form:errors path="remark" cssClass="error" />
                                        </div>
                                    </div>
                                    
                                    <%-- <div class="form-group">
	                                    <label class="col-sm-4 col-xs-12 control-label search-text visible-lg visible-md visible-sm">
	                                      <spring:message code="label.journal.paymenttype" text="Default Text"/>
	                                    </label>
                                        <div class="col-sm-8 col-xs-12">
                                            <form:select id="acctype" class="form-control" path="borb">
                                                    <option value="0">Box</option>
                                                    <option value="1">Bank</option>
                                            </form:select>
                                            <form:errors path="borb" cssClass="error" />
                                        </div>
                                    </div> --%>
                                    
                                    
                                    
                                    <div class="form-group">
	                                    <label class="col-sm-4 col-xs-12 control-label search-text visible-lg visible-md visible-sm">
<spring:message code="label.journal.paymenttype" text="Default Text"/>	                                    </label>
	                                    <div class="col-sm-8 col-xs-12">
	                                        <form:select id="acctype" class="form-control" path="borb">
	                                            <form:option value="2"><spring:message code="label.invoice.boxtype" text="Default Text"/></form:option>
	                                            <form:option value="1"><spring:message code="label.invoice.banktype" text="Default Text"/></form:option>
	                                            <c:if test="${types != null}">
	                                                <c:forEach items="${types}" var="type">
	                                                    <form:option value="${type.id}">${type.name}</form:option>
	                                                </c:forEach>
	                                            </c:if>
	                                        </form:select>
	                                       
	                                                
	                                    </div>
	                                    
	                                    
	                                </div>
	                                
	                                
	                                
	                                 <div id="subdv" class="form-group">
	                                   
	                                    
	                                </div>
                                    
                                    
                                    
                                    

                                    <div class="form-group">
                                    <div class="">
                                        <div class="div-center-xs">
                                            <input type="submit" class="btn btn-orange" value="Save" />
                                            <button type="button" class="btn btn-orange" onclick="javascript:history.back();">Cancel</button>
                                        </div>
                                    </div>
                                    </div>
                                <!-- /div -->                                        
                               
                            </form:form>
                                
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
       <!--  <script src="js/bootstrap.min.js"></script>
        <script src="js/jquery.dataTables.min.js"></script>
        <script src="js/dataTables.responsive.min.js"></script>
        <script src="js/ajax-bootstrap3.js"></script> -->
         <script src="js/bootstrap.min.js"></script>
        <!-- Jquery UI Javascript -->
        <script src="js/jquery-ui.js"></script>
        <script type="text/javascript">
        $(document).ready(function() {
        $('#subdv').hide();
        
        
        $('#acctype').change(function(){
        	
        	
        	var val=$('#acctype').val();
        	
        	$.ajax({url:"getaccountlist.html?val="+val,
        		success:function(result){
        	    
        			$("#subdv").html(result);
        			$('#subdv').show();
        	  }});
       
        
           
            
            
        });
        $('#datepicker').datepicker({dateFormat: 'dd/mm/yy'});
        });
        </script>
    </body>
</html>