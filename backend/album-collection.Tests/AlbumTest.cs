using album_collection.Models;
using System;
using System.Collections.Generic;
using System.Text;
using Xunit;

namespace album_collection.Tests
{
    public class AlbumTest
    {
        Album sut;
        public AlbumTest()
        {
            sut = new Album();
            sut.Id = 1;
            sut.Title = "Back in Black";
            sut.recordLabel = "Atlantic Record Label";
        }

        [Fact]
        public void Album_Sets_Id_On_AlbumModel()
        {
            // Arrange

            // Act
            int id = sut.Id;

            // Assert
            Assert.Equal(1, id);
        }

        [Fact]
        public void Album_Sets_Title_On_AlbumModel()
        {
            // Arrange

            // Act
            string title = sut.Title;

            // Assert
            Assert.Equal("Back in Black", title);
        }

        [Fact]
        public void Album_Sets_RecordLabel_On_AlbumModel()
        {
            // Arrange

            // Act
            string recordLabel = sut.recordLabel;

            // Assert
            Assert.Equal("Atlantic Record Label", recordLabel);
        }
    }
}
