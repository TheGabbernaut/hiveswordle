import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the troll name in 5 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word.
      </p>
	  <p className="text-sm text-gray-500 dark:text-gray-300">
        This version includes first and last names of all trolls from Homestuck, Friendsim and Hiveswap.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="F"
          status="correct"
        />
        <Cell value="O" />
        <Cell value="L" />
        <Cell value="Y" />
        <Cell value="K" />
		<Cell value="L" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter F is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="M" />
        <Cell value="A" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="R"
          status="present"
        />
        <Cell value="S" />
        <Cell value="T" />
		<Cell value="I" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter R is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="E" />
        <Cell value="R" />
        <Cell value="I" />
        <Cell isRevealing={true} isCompleted={true} value="D" status="absent" />
        <Cell value="A" />
		<Cell value="N" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter D is not in the word in any spot.
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-300">
        
		
      </p>
	  <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
	    Made with the help of people from HSD; Inspired by {' '}
        <a
          href="https://mspfa.com/?s=45209&p=1"
          className="underline font-bold"
        >
          Homesturdle
        </a>{' '}
	  </p>
	  <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        If you have questions or bug reports, feel free to reach out to me on hiveswordle@gmail.com
      </p>
	  <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is an open source version of the word guessing game we all know and
        love -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
