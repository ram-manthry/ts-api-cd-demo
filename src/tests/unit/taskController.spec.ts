import { getAllTasks } from '../../controllers/taskController';
import { getMockReq, getMockRes } from '@jest-mock/express';

describe('getAllTasks', () => {
    test('should send all tasks via response', () => {
        // Arrange
        const reqMock = getMockReq()
        const { res } = getMockRes()
        // Act
        getAllTasks(reqMock, res)
        //Assert
        expect(res.send).toBeCalledTimes(1)
    })
})

describe('getOneTask', () => {
    test('should send 404 if it does not exist', () => {

        // Arrange
        const reqMock = getMockReq({ params: { id: "22" } as any })
        const { res } = getMockRes()
        
        // Act
        getAllTasks(reqMock, res)
        
        //Assert
        
        expect(res.statusCode).toBe(404)
    })
})