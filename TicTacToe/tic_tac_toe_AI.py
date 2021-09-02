class AI:

    def move(self, status):
        # Check whether AI can win
        temp_board = status.copy()
        for i in range(3):
            for j in range(3):
                if temp_board[i][j] == '_':
                    temp_board[i][j] = 'O'
                    if self.check_win(temp_board):
                        status = temp_board
                        return status
                    else:
                        temp_board[i][j] = '_'

                else:
                    continue

        # Check whether can block
        temp_board = status.copy()
        for i in range(3):
            for j in range(3):
                if temp_board[i][j] == '_':
                    temp_board[i][j] = 'X'
                    if self.check_win(temp_board):
                        temp_board[i][j] = "O"
                        status = temp_board
                        return status
                    else:
                        temp_board[i][j] = '_'
                else:
                    continue

        # ELse Random
        for i in range(3):
            for j in range(3):
                if status[i][j] == '_':
                    status[i][j] = 'O'
                    return status

    def check_win(self, status):
        for i in range(3):
            if status[i][0] == status[i][1] == status[i][2] and status[i][0] != '_':
                return True
            if status[0][i] == status[1][i] == status[2][i] and status[0][i] != '_':
                return True

        if status[0][0] == status[1][1] == status[2][2] and status[0][0] != '_':
            return True
        if status[0][2] == status[1][1] == status[2][0] and status[0][2] != '_':
            return True

        return False

    # def analyze(self):
