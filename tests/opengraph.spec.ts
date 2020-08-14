import { expect } from 'chai'
import { NodeType } from '../src/types'

describe('open graph', () => {
  it('should handle default config', () => {
    const data = {
      'title': 'test',
      'type': NodeType.WEB,
      'description': 'lorem ipsum',
      'image': 'http://test.jpg',
      'url': 'http://test.com'
    }
  })
})