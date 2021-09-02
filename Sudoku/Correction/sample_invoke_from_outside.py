from sudoku9 import Sudoku9
import time
import numpy as np

def read_input_arr(file_path):

    fIn = open(file_path)
    input_arr = np.array([[0, 0, 0, 0, 0, 0, 0, 0, 0]] * 9)
    # Read in the board
    for i in range(9):
        boardIn = fIn.readline()
        line = boardIn.split(" ")
        input_arr[i] = line

    fIn.close()

    return input_arr


def write_output_arr(file_path, array):

    # File Output
    fOut = open(file_path, "w")
    boardString = ""
    for r in array:
        boardString = boardString + " ".join([str(x) for x in r]) + "\n"
    fOut.write(boardString)

    # Close files
    fOut.close()


if __name__ == "__main__":

    in_file_path = "inputFile.txt"
    input_arr = read_input_arr(file_path=in_file_path)

    start = time.process_time()

    sudoku = Sudoku9(input_arr)
    output_array = sudoku.solve()

    end = time.process_time()
    print("Time taken: " + str(round((end - start) * 1000, 3)) + "ms")

    out_file_path = "outputFile.txt"
    write_output_arr(file_path=out_file_path, array=output_array)





