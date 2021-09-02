import time

import numpy as np

# global variables, this is not best practice
board = np.array([[0, 0, 0, 0, 0, 0, 0, 0, 0]] * 9)
blankCount = 0
possibility = []
blankX = []
blankY = []


# 由于存在递归调用，该方法又依赖于外部全局变量，
# 并且全局变量的初始化要在process方法外完成，
# 导致该方法很难在当前py文件之外调用
def process():

    # 竖列排除
    for i in range(blankCount):

        if -1 in possibility[i]:
            continue

        for r in range(9):
            num = board[r][blankY[i]]
            if num !=0 and num in possibility[i]:
                possibility[i].remove(num)

        if len(possibility[i]) == 1 and possibility[i][0] != -1:
            board[blankX[i]][blankY[i]] = possibility[i][0]
            # possibility=-1 means found the final number
            possibility[i][0] = -1
            process()

    # 横排排除
    for i in range(blankCount):

        if -1 in possibility[i]:
            continue

        for r in range(9):
            num = board[blankX[i]][r]
            if num != 0 and num in possibility[i]:
                possibility[i].remove(num)

        if len(possibility[i]) == 1 and possibility[i][0] != -1:
            board[blankX[i]][blankY[i]] = possibility[i][0]
            # possibility=-1 means found the final number
            possibility[i][0] = -1
            process()

    # 方格内排除
    fangGeX = [int(x/3) for x in blankX]
    fangGeY = [int(y/3) for y in blankY]

    for i in range(blankCount):
        if -1 in possibility[i]:
            continue

        fangGex = fangGeX[i] * 3
        fangGey = fangGeY[i] * 3
        for r in range(3):
            for c in range(3):
                num = board[fangGex + r][fangGey + c]
                if num != 0 and num in possibility[i]:
                    possibility[i].remove(num)

        if len(possibility[i]) == 1 and possibility[i][0] != -1:
            board[blankX[i]][blankY[i]] = possibility[i][0]
            # possibility=-1 means found the final number
            possibility[i][0] = -1
            process()

    # Row Possibility Exclusion
    for i in range(blankCount):
        if -1 in possibility[i]:
            continue

        j = 0
        while j < len(possibility[i]):
            num = possibility[i][j]
            flag = -1

            for m in range(blankCount):
                if blankX[m] == blankX[i] and m != i and num in possibility[m]:
                    flag = 1

            if flag == -1:
                board[blankX[i]][blankY[i]]=num
                # possibility=-1 means found the final number
                possibility[i] = [-1]
                process()
            j += 1

    # Column Possibility Exclusion
    for i in range(blankCount):
        if -1 in possibility[i]:
            continue

        j = 0
        while j < len(possibility[i]):
            num = possibility[i][j]
            flag = -1

            for m in range(blankCount):
                if blankY[m] == blankY[i] and m != i and num in possibility[m]:
                    flag = 1

            if flag == -1:
                board[blankX[i]][blankY[i]]=num
                possibility[i] = [-1]
                process()
            j += 1

    # FangGe Possibility Exclusion
    for i in range(blankCount):
        if -1 in possibility[i]:
            continue

        fX = (int(blankX[i]/3) + 1) * 3
        fY = (int(blankY[i]/3) + 1) * 3

        j = 0
        while j < len(possibility[i]):
            num=possibility[i][j]
            flag=-1

            for m in range(blankCount):
                if blankX[m] < fX and blankY[m] < fY and m != i and num in possibility[m]:
                    flag = 1

            if flag == -1:
                board[blankX[i]][blankY[i]] = num
                possibility[i] = [-1]
                process()
            j += 1


if __name__ == '__main__':

    start = time.process_time()

    # Setup
    fIn = open("inputFile.txt")

    # Read in the board
    for i in range(9):
        boardIn = fIn.readline()
        line = boardIn.split(" ")
        for j in range(9):
            line[j] = int(line[j])
            if (line[j] == 0):
                blankCount += 1
                blankX.append(i)
                blankY.append(j)
        board[i] = line

    print("Given: ")
    print(board)
    print("Number of blanks: " + str(blankCount))
    print()

    possibility = [[1, 2, 3, 4, 5, 6, 7, 8, 9] for i in range(blankCount)]

    process()

    print("Result: ")
    print(board)

    missCount=0
    for a in possibility:
        if -1 not in a:
            missCount += 1
    print("Number of misses: "+ str(missCount))

    # File Output

    # File Output
    fOut = open("outputFile.txt", "w")
    boardString = ""
    for r in board:
        boardString = boardString + " ".join([str(x) for x in r]) + "\n"
    fOut.write(boardString)
    # Close files
    fOut.close()

    # Final print board
    end = time.process_time()

    print("Time taken: " + str(round((end - start) * 1000, 3)) + "ms")

