const express = require('express')
const routes = express.Router()

routes.get('/',(req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        
        conn.query('SELECT * FROM Alumnos', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/',(req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        //console.log(req.body);
        conn.query('INSERT INTO Alumnos set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Datos Guardados')
        })
    })
})
routes.delete('/:id',(req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        //console.log(req.body);
        conn.query('DELETE FROM Alumnos WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Alumno fue eliminado')
        })
    })
})

routes.put('/:id',(req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        //console.log(req.body);
        conn.query('UPDATE Alumnos set ? WHERE id = ?',[req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Alumno fue Actualizado');
        })
    })
})

module.exports = routes