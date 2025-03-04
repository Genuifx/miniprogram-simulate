/* global simulate */
const path = require('path')
const expect = require('chai').expect

describe('comp4', () => {
    it('should run successfully', async() => {
        const id = simulate.load(path.resolve(__dirname, '../comp4/index'))
        const comp = simulate.render(id)

        const parent = document.createElement('parent-wrapper')
        comp.attach(parent)

        expect(comp.dom.innerHTML).to.equal('<other-comp><wx-view>component b</wx-view></other-comp>')
    })
})
