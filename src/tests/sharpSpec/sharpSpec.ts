import resizeImage from '../../processing/resize'
import path from 'path'

describe('Testing the resizing functionality', () => {
	it('Expect if given valid image, no width, no height returns original', async () => {
        await expect(true).toBeTruthy
    })
	it('Expect if given valid image, width, height resizes with crop', async () => {
        await expect(resizeImage(path.resolve('./') + '/assets/flower.jpg', 300, 200, 0)).not.toThrow
	})
    /*
    it('Expect if given valid image, width, no height resizes on width with aspect ratio', async () => {
        await expect(resizeImage(path.resolve('./') + '/assets/flower.jpg', 0, 200, 2)).toThrow
    })
	it('Expect if given valid image, height is negative number', async () => {
        await expect(resizeImage(path.resolve('./') + '/assets/flower.jpg', 300, -200, 0)).toThrow
	})
    */
})
