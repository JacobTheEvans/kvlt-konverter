import convertStringToKvlt from '../src'
import { assert } from 'chai'
import 'mocha'

describe('Kvlt Spec Coverage', () => {
  describe('Replace god with satan', () => {
    it('should replace capitalized god with satan', () => {
      const result = convertStringToKvlt(
        'God',
        { convertGodToSatan: true }
      )
      assert.equal(result, 'satan')
    })
    it('should replace lowercase god with satan', () => {
      const result = convertStringToKvlt(
        'god',
        { convertGodToSatan: true }
      )
      assert.equal(result, 'satan')
    })
    it('should replace mixed case god with satan', () => {
      const result = convertStringToKvlt(
        'gOD',
        { convertGodToSatan: true }
      )
      assert.equal(result, 'satan')
    })
    it('should god with satan in string with other words', () => {
      const result = convertStringToKvlt(
        'god im writing tests for a joke',
        { convertGodToSatan: true }
      )
      assert.equal(result, 'satan im writing tests for a joke')
    })
  })

  describe('Replace u with v', () => {
    it('should replace capitalized u with v', () => {
      const result = convertStringToKvlt(
        'U',
        { convertUToV: true }
      )
      assert.equal(result, 'V')
    })
    it('should replace lowercase u with v', () => {
      const result = convertStringToKvlt(
        'u',
        { convertUToV: true }
      )
      assert.equal(result, 'v')
    })
    it('should u with v in string with many words/cases', () => {
      const result = convertStringToKvlt(
        'unusually this work for yoU',
        { convertUToV: true }
      )
      assert.equal(result, 'vnvsvally this work for yoV')
    })
  })

  describe('Replace c with k', () => {
    it('should replace capitalized c with k', () => {
      const result = convertStringToKvlt(
        'C',
        { convertCToK: true }
      )
      assert.equal(result, 'K')
    })
    it('should replace lowercase c with k', () => {
      const result = convertStringToKvlt(
        'c',
        { convertCToK: true }
      )
      assert.equal(result, 'k')
    })
    it('should c with k in string with many words/cases', () => {
      const result = convertStringToKvlt(
        'because I Could not stop for death',
        { convertCToK: true }
      )
      assert.equal(result, 'bekause I Kould not stop for death')
    })
  })

  describe('Replace o with ö', () => {
    it('should replace capitalized o with ö', () => {
      const result = convertStringToKvlt(
        'O',
        { convertOToÖ: true }
      )
      assert.equal(result, 'Ö')
    })
    it('should replace lowercase o with ö', () => {
      const result = convertStringToKvlt(
        'o',
        { convertOToÖ: true }
      )
      assert.equal(result, 'ö')
    })
    it('should o with ö in string with many words/cases', () => {
      const result = convertStringToKvlt(
        'wow thats awesOme',
        { convertOToÖ: true }
      )
      assert.equal(result, 'wöw thats awesÖme')
    })
  })

  describe('Replace music genres with trve nörwegian black metal', () => {
    it('should replace capitalized genres with trve nörwegian black metal', () => {
      const genres = ['country', 'rock', 'pop', 'hip hop']
      const result = convertStringToKvlt(
        'Country, Rock, Pop, Hip Hop',
        {
          convertGenresToTrveNorwegianBlackMetal: true,
          genres
        }
      )
      assert.equal(
        result,
        'trve nörwegian black metal, trve nörwegian black metal, trve nörwegian black metal, trve nörwegian black metal'
      )
    })
    it('should replace genres with trve nörwegian black metal', () => {
      const genres = ['country', 'rock', 'pop', 'hip hop']
      const result = convertStringToKvlt(
        'country, rock, pop, hip hop',
        {
          convertGenresToTrveNorwegianBlackMetal: true,
          genres
        }
      )
      assert.equal(
        result,
        'trve nörwegian black metal, trve nörwegian black metal, trve nörwegian black metal, trve nörwegian black metal'
      )
    })
    it('should c with k in string with many words/cases', () => {
      const genres = ['country', 'rock', 'pop', 'hip hop']
      const result = convertStringToKvlt(
        'I love Country, Rock, Pop, and Hip Hop its the best!',
        {
          convertGenresToTrveNorwegianBlackMetal: true,
          genres
        }
      )
      assert.equal(result, 'I love trve nörwegian black metal, trve nörwegian black metal, trve nörwegian black metal, and trve nörwegian black metal its the best!')
    })
  })
})
