(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6761],{25851:(e,t,a)=>{Promise.resolve().then(a.bind(a,87645))},42414:(e,t,a)=>{"use strict";a.d(t,{A:()=>i});var s=a(23464);s.A.defaults.baseURL="https://akathos.moph.go.th/akatApi/";let i=s.A},57791:(e,t,a)=>{"use strict";a.d(t,{r:()=>l});var s=a(82940),i=a.n(s);let l=e=>i()(e).locale("th").add(543,"years").format("วันที่ DD/MM/YYYY เวลา HH:mm น.")},87181:(e,t,a)=>{"use strict";a.d(t,{A:()=>d});var s=a(95155),i=a(12115),l=a(77566),n=a(60760),r=a(49932),o=a(40592);function d(e){let{isOpen:t,onClose:a,onSubmit:d,fields:c,initialData:u={},title:m="Form Modal"}=e,[p,h]=(0,i.useState)(u);(0,i.useEffect)(()=>{h(u),setTimeout(()=>{var e;null===(e=document.getElementById("input-1"))||void 0===e||e.focus()},100)},[u]);let x=(e,t)=>{h(a=>({...a,[e]:t}))},b=async()=>{await d(p),a(),h({})},y=(0,s.jsxs)("div",{className:"flex justify-end gap-2 font-semibold",children:[(0,s.jsx)(o.Button,{onClick:a,className:"px-6 py-1.5 border border-gray-400 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors",label:"ยกเลิก"}),(0,s.jsx)(o.Button,{onClick:b,className:"px-6 py-1.5 border border-blue-800 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-colors",label:"บันทึก"})]});return(0,s.jsx)(n.N,{children:t&&(0,s.jsx)(r.P.div,{variants:{hidden:{opacity:0},visible:{opacity:.3},exit:{opacity:0,transition:{duration:.3}}},initial:"hidden",animate:"visible",exit:"exit",className:"fixed inset-0 bg-black z-10",children:(0,s.jsx)(r.P.div,{variants:{hidden:{opacity:0,scale:.95,y:20},visible:{opacity:1,scale:1,y:0,transition:{duration:.2,ease:"easeOut"}},exit:{opacity:0,scale:.95,y:20,transition:{duration:.2,ease:"easeIn"}}},initial:"hidden",animate:"visible",exit:"exit",className:"h-full flex items-center justify-center p-4",children:(0,s.jsx)(l.l,{visible:t,onHide:a,header:(0,s.jsx)("p",{className:"font-semibold text-md",children:m}),footer:y,className:"w-full max-w-md bg-white p-4 rounded-xl mx-4",children:(0,s.jsx)("div",{className:"py-4",children:c.map((e,t)=>(0,s.jsx)("div",{className:"mb-4 mx-1",children:(0,s.jsx)("input",{placeholder:e.label,value:p[e.name]||"",onChange:t=>x(e.name,t.target.value),className:"w-full text-[0.95rem] p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"},"input-".concat(t+1))},e.name))})})})})})}},87645:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>x});var s=a(95155),i=a(87181),l=a(42414),n=a(57791),r=a(41023),o=a(1584),d=a(36768),c=a(50142),u=a(49103),m=a(40592),p=a(12115),h=a(95799);function x(){let[e,t]=(0,p.useState)([]),[a,x]=(0,p.useState)(!1),[b,y]=(0,p.useState)("create"),[f,g]=(0,p.useState)(null);(0,p.useEffect)(()=>{_()},[]);let _=async()=>{let e=localStorage.getItem("token");try{let a=await l.A.get("/setting/getShiftTypes",{headers:{Authorization:"Bearer ".concat(e)}});200===a.status&&t(a.data.data)}catch(e){console.log(e)}},v=async e=>{let t=localStorage.getItem("token");try{let a=await l.A.post("/setting/insertShiftType",{shift_type_name:e.shift_type_name},{headers:{Authorization:"Bearer ".concat(t)}});(200===a.status||201===a.status)&&(h.oR.success("สร้างสถานะสำเร็จ!"),_())}catch(e){h.oR.error("ไม่สามารถสร้างข้อมูลได้ กรุณาลองใหม่")}},j=async e=>{let t=localStorage.getItem("token");try{let a=await l.A.put("/setting/updateShiftType/".concat(f.index),{shift_type_name:e.shift_type_name},{headers:{Authorization:"Bearer ".concat(t)}});200===a.status&&(h.oR.success("แก้ไขสำเร็จ!"),_())}catch(e){h.oR.error("ไม่สามารถแก้ไขข้อมูลได้ กรุณาลองใหม่")}},N=async e=>{let t=localStorage.getItem("token");try{let a=await l.A.delete("/setting/removeShiftType/".concat(e.index),{headers:{Authorization:"Bearer ".concat(t)}});200===a.status&&(h.oR.success("ลบสำเร็จ!"),_())}catch(e){h.oR.error("ไม่สามารถลบข้อมูลได้ กรุณาลองใหม่")}},w=e=>{y("edit"),g(e),x(!0)},k=e.map((e,t)=>({...e,index:t+1})),A=[{title:"ID",dataIndex:"index",sorter:(e,t)=>e.index-t.index,responsive:["md"],ellipsis:!0,width:"5rem"},{title:"ชื่อสถานะ",dataIndex:"shift_type_name",sorter:(e,t)=>e.check_in_status_name.localeCompare(t.check_in_status_name),ellipsis:!0},{title:"สร้างโดย",dataIndex:"created_by",responsive:["lg"],sorter:(e,t)=>e.created_by.localeCompare(t.created_by),ellipsis:!0},{title:"วันที่สร้าง",dataIndex:"created_at",render:e=>(0,n.r)(e),sorter:(e,t)=>e.created_at.localeCompare(t.created_at),ellipsis:!0},{title:"อัพเดทโดย",dataIndex:"updated_by",responsive:["lg"],sorter:(e,t)=>e.updated_by.localeCompare(t.updated_by),ellipsis:!0},{title:"วันที่อัพเดท",dataIndex:"updated_at",render:e=>(0,n.r)(e),sorter:(e,t)=>e.updated_at.localeCompare(t.updated_at),ellipsis:!0},,{title:"การดำเนินการ",render:e=>(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsx)("button",{onClick:()=>w(e),className:"text-blue-500 hover:cursor-pointer hover:underline",children:"แก้ไข"}),(0,s.jsx)(r.A,{title:"คุณต้องการลบข้อมูล",description:"ยืนยันที่จะลบข้อมูลใช่หรือไม่",placement:"topLeft",onConfirm:()=>N(e),onCancel:()=>console.log("ยกเลิก"),okText:"ยืนยัน",cancelText:"ยกเลิก",children:(0,s.jsx)("button",{className:"text-red-500 hover:cursor-pointer hover:underline",children:"ลบ"})})]}),width:"8rem"}];return(0,s.jsxs)("div",{className:"bg-white p-4 rounded-xl text-wrap select-none",children:[(0,s.jsx)("div",{className:"my-2 font-semibold pl-1.5 bg-blue-900 rounded-md shadow-sm",children:(0,s.jsxs)("h1",{className:"bg-blue-50 p-2 pl-3 text-blue-900 flex gap-2 items-center",children:[(0,s.jsx)(c.A,{size:20}),"ข้อมูลสถานะประเภทวันเข้างาน"]})}),(0,s.jsx)("div",{className:"flex justify-end my-3",children:(0,s.jsx)(m.Button,{className:"bg-green-700 hover:bg-green-600 transition py-2 px-6 rounded-md mb-4 text-sm font-semibold text-white shadow-sm",onClick:()=>{y("create"),g(null),x(!0)},label:(0,s.jsxs)("div",{className:"flex gap-1.5 items-center",children:[(0,s.jsx)(u.A,{size:16,strokeWidth:3})," สร้างใหม่"]})})}),(0,s.jsx)(i.A,{isOpen:a,onClose:()=>x(!1),onSubmit:e=>{"create"===b?v(e):"edit"===b&&j(e)},fields:[{name:"shift_type_name",label:"ชื่อสถานะ"}],initialData:"edit"===b&&f?{shift_type_name:f.shift_type_name}:{},title:"create"===b?"สร้างสถานะใหม่":"แก้ไขสถานะ"}),(0,s.jsx)(o.A,{dataSource:k,columns:A,rowKey:"index",scroll:{x:800},size:"small",locale:{emptyText:(0,s.jsx)(d.A,{description:"ไม่พบข้อมูล"})},pagination:{pageSizeOptions:["5","10","20","50","100"],showSizeChanger:!0,defaultPageSize:10,showTotal:e=>"ทั้งหมด ".concat(e," รายการ")}})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[586,3464,4396,5799,592,437,9203,7137,8441,1684,7358],()=>t(25851)),_N_E=e.O()}]);