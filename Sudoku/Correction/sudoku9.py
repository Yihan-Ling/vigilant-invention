class Sudoku9(object):

    board = None
    blankCount = 0
    possibility = []
    blankX = []
    blankY = []

    def __init__(self, input_array):
        # Setup
        self.board = input_array

        # Read in the board
        for i in range(9):
            for j in range(9):
                if input_array[i][j] == 0:
                    self.blankCount += 1
                    self.blankX.append(i)
                    self.blankY.append(j)

        self.possibility = [[1, 2, 3, 4, 5, 6, 7, 8, 9] for i in range(self.blankCount)]

        print("Given: ")
        print(self.board)
        print("Number of blanks: " + str(self.blankCount))
        print()

    def solve(self):
        self.__process__()

        print("Result: ")
        print(self.board)

        miss_count = 0
        for a in self.possibility:
            if -1 not in a:
                miss_count += 1
        print("Number of misses: " + str(miss_count))

        return self.board

    def __process__(self):

        # 竖列排除
        for i in range(self.blankCount):

            if -1 in self.possibility[i]:
                continue

            for r in range(9):
                num = self.board[r][self.blankY[i]]
                if num != 0 and num in self.possibility[i]:
                    self.possibility[i].remove(num)

            if len(self.possibility[i]) == 1 and self.possibility[i][0] != -1:
                self.board[self.blankX[i]][self.blankY[i]] = self.possibility[i][0]
                # self.possibility=-1 means found the final number
                self.possibility[i][0] = -1
                self.__process__()

        # 横排排除
        for i in range(self.blankCount):

            if -1 in self.possibility[i]:
                continue

            for r in range(9):
                num = self.board[self.blankX[i]][r]
                if num != 0 and num in self.possibility[i]:
                    self.possibility[i].remove(num)

            if len(self.possibility[i]) == 1 and self.possibility[i][0] != -1:
                self.board[self.blankX[i]][self.blankY[i]] = self.possibility[i][0]
                # self.possibility=-1 means found the final number
                self.possibility[i][0] = -1
                self.__process__()

        # 方格内排除
        fangGeX = [int(x / 3) for x in self.blankX]
        fangGeY = [int(y / 3) for y in self.blankY]

        for i in range(self.blankCount):
            if -1 in self.possibility[i]:
                continue

            fangGex = fangGeX[i] * 3
            fangGey = fangGeY[i] * 3
            for r in range(3):
                for c in range(3):
                    num = self.board[fangGex + r][fangGey + c]
                    if num != 0 and num in self.possibility[i]:
                        self.possibility[i].remove(num)

            if len(self.possibility[i]) == 1 and self.possibility[i][0] != -1:
                self.board[self.blankX[i]][self.blankY[i]] = self.possibility[i][0]
                # self.possibility=-1 means found the final number
                self.possibility[i][0] = -1
                self.__process__()

        # Row self.possibility Exclusion
        for i in range(self.blankCount):
            if -1 in self.possibility[i]:
                continue

            j = 0
            while j < len(self.possibility[i]):
                num = self.possibility[i][j]
                flag = -1

                for m in range(self.blankCount):
                    if self.blankX[m] == self.blankX[i] and m != i and num in self.possibility[m]:
                        flag = 1

                if flag == -1:
                    self.board[self.blankX[i]][self.blankY[i]] = num
                    # self.possibility=-1 means found the final number
                    self.possibility[i] = [-1]
                    self.__process__()
                j += 1

        # Column self.possibility Exclusion
        for i in range(self.blankCount):
            if -1 in self.possibility[i]:
                continue

            j = 0
            while j < len(self.possibility[i]):
                num = self.possibility[i][j]
                flag = -1

                for m in range(self.blankCount):
                    if self.blankY[m] == self.blankY[i] and m != i and num in self.possibility[m]:
                        flag = 1

                if flag == -1:
                    self.board[self.blankX[i]][self.blankY[i]] = num
                    self.possibility[i] = [-1]
                    self.__process__()
                j += 1

        # FangGe self.possibility Exclusion
        for i in range(self.blankCount):
            if -1 in self.possibility[i]:
                continue

            fX = (int(self.blankX[i] / 3) + 1) * 3
            fY = (int(self.blankY[i] / 3) + 1) * 3

            j = 0
            while j < len(self.possibility[i]):
                num = self.possibility[i][j]
                flag = -1

                for m in range(self.blankCount):
                    if self.blankX[m] < fX and self.blankY[m] < fY and m != i and num in self.possibility[m]:
                        flag = 1

                if flag == -1:
                    self.board[self.blankX[i]][self.blankY[i]] = num
                    self.possibility[i] = [-1]
                    self.__process__()
                j += 1

