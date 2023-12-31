 const jsonserver=require("json-server")

 const server=jsonserver.create()

 const router=jsonserver.router("db.json")

  const middleware=jsonserver.defaults({noCors:true})
  const cors=require("cors")
  
  server.use(cors())
  server.use(middleware)

  server.use("",router)

  server.listen(8080,()=>{
    console.log("server is runing at 8080 port")
  })