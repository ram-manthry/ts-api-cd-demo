import { getAllTasks } from "../../controllers/taskController"
import {getMockReq, getMockRes} from '@jest-mock/express'
describe('getAllTasks', ()=> {
    test('should send all tasks via res', ()=> {

    //Arrange
    const reqMock = getMockReq();
    const {res} = getMockRes();
 
    getAllTasks(reqMock, res)

    //Act
    expect(res.send).toBeCalledTimes(1)
    //Assert
    })
})    

// describe('getOneTask', ()=> {
//     test('should send 404 if not exsts', ()=> {

//     //Arrange
//     const reqMock = getMockReq({param: {if: '22'}as any});
//     const {res} = getMockRes();
//     res.status(404)
    
//     getAllTasks(reqMock, res)

//     //Act
//     expect(res.statusCode).toHaveBeenCalledWith(404)
//     //Assert
//     })
            
